import { BookingId, BookingInitializer, Customer } from '@easybooking/schema';
import { bookingId } from '@easybooking/schema/dist/models/public/Booking';
import {
  serviceTypeId,
  serviceType,
} from '@easybooking/schema/dist/models/public/ServiceType';
import { add } from 'date-fns';
import { Range, RANGE_LB_INC, RANGE_UB_INC } from 'postgres-range';
import { z } from 'zod';

import { publicProcedure, router } from './trpc';
import getBookedSlots, { slot } from './getBookedSlots';
import trpcAssert from './trpcAssert';

const getServiceTypesOutput = z.array(serviceType);

const createServiceTypeInput = z.object({
  name: z.string(),
  description: z.string(),
});

const getAvailabilityOutput = z.array(slot);

const createBookingInput = z.object({
  serviceTypeId: serviceTypeId,
  time: z.date(),
  description: z.string(),
  email: z.string(),
});

const appRouter = router({
  ping: publicProcedure.query(async () => 'pong'),
  getServiceTypes: publicProcedure
    .output(getServiceTypesOutput)
    .query(async ({ ctx }) => {
      const serviceTypes = await ctx.trx('service_type').select('*');
      return serviceTypes;
    }),

  createServiceType: publicProcedure
    .input(createServiceTypeInput)
    .output(serviceType)
    .mutation(async ({ ctx, input }) => {
      const [result] = await ctx
        .trx('service_type')
        .insert(input)
        .returning('*');
      return result;
    }),

  getAvailability: publicProcedure
    .input(z.object({ startDate: z.date(), numberOfDays: z.number() }))
    .output(getAvailabilityOutput)
    .query(async ({ ctx, input }) => {
      const endDate = add(input.startDate, { days: input.numberOfDays });
      const res = await getBookedSlots(ctx.trx, input.startDate, endDate);
      return res;
    }),

  createBooking: publicProcedure
    .input(createBookingInput)
    .output(z.object({ bookingId: bookingId }))
    .mutation(async ({ ctx, input }) => {
      const during = new Range<Date>(
        input.time,
        add(input.time, { hours: 3 }),
        RANGE_LB_INC | RANGE_UB_INC,
      );

      let customer: Customer | undefined = await ctx
        .trx('customer')
        .where('email', input.email)
        .first();

      if (!customer) {
        customer = await ctx
          .trx('customer')
          .insert({ email: input.email, name: 'Anonymous' })
          .returning('*')
          .then((rows) => rows[0]);
      }
      trpcAssert(customer, 'Could not create customer');

      const provider = await ctx.trx('provider').first();
      trpcAssert(provider, 'Could not find provider');

      const initializer: BookingInitializer = {
        customer_id: customer.id,
        provider_id: provider.id,
        during,
      };

      const bookingId = (await ctx
        .trx('booking')
        .insert(initializer)
        .returning('id')
        .then((rows) => rows[0])) as BookingId;

      return { bookingId };
    }),
});

export type AppRouter = typeof appRouter;

export default appRouter;
