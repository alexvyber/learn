import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

const t = initTRPC.create({ transformer: superjson });

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
