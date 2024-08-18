import { z } from 'zod';

import { publicProcedure, router } from './trpc';
import { serviceType } from '@easybooking/schema/dist/models/public/ServiceType';

const getServiceTypesOutput = z.array(serviceType);

const createServiceTypeInput = z.object({
  name: z.string(),
  description: z.string(),
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
});

export type AppRouter = typeof appRouter;

export default appRouter;
