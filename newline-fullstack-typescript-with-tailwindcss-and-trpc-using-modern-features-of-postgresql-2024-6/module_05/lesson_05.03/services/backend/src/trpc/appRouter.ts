import { z } from 'zod';

import { publicProcedure, router } from './trpc';

const getServiceTypesOutput = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  })
);

const appRouter = router({
  ping: publicProcedure.query(async () => 'pong'),
  getServiceTypes: publicProcedure
    .output(getServiceTypesOutput)
    .query(async () => [
      {
        id: 1,
        name: 'Service 1',
      },
      {
        id: 2,
        name: 'Service 2',
      },
    ]),
});

export type AppRouter = typeof appRouter;

export default appRouter;
