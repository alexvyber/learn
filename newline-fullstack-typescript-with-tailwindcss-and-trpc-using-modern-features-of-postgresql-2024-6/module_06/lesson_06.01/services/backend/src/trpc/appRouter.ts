import { z } from 'zod';

import { publicProcedure, router } from './trpc';
import { serviceType } from '@easybooking/schema/dist/models/public/ServiceType';

const getServiceTypesOutput = z.array(serviceType);

const appRouter = router({
  ping: publicProcedure.query(async () => 'pong'),
  getServiceTypes: publicProcedure
    .output(getServiceTypesOutput)
    .query(async ({ ctx }) => {
      const serviceTypes = await ctx.trx('service_type').select('*');
      return serviceTypes;
    }),
});

export type AppRouter = typeof appRouter;

export default appRouter;
