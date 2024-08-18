import { publicProcedure, router } from './trpc';

const appRouter = router({
  ping: publicProcedure.query(async () => 'pong'),
  getServiceTypes: publicProcedure.query(async () => [
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
