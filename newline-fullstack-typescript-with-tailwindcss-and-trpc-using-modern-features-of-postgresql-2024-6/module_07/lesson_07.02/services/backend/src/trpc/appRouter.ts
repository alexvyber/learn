import { z } from 'zod';
import { add } from 'date-fns';

import { publicProcedure, router } from './trpc';
import { serviceType } from '@easybooking/schema/dist/models/public/ServiceType';
import getBookedSlots, { slot } from './getBookedSlots';

const getServiceTypesOutput = z.array(serviceType);

const createServiceTypeInput = z.object({
  name: z.string(),
  description: z.string(),
});

const getAvailabilityInput = z.object({
  startDate: z.date(),
  numberOfDays: z.number(),
});
const getAvailabilityOutput = z.array(slot);

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
    .input(getAvailabilityInput)
    .output(getAvailabilityOutput)
    .query(async ({ ctx, input }) => {
      const endDate = add(input.startDate, { days: input.numberOfDays });
      const res = await getBookedSlots(ctx.trx, input.startDate, endDate);
      return res;
    }),
});

export type AppRouter = typeof appRouter;

export default appRouter;
