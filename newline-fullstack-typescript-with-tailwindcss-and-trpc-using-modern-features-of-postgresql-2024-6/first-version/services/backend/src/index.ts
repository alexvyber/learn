import Router from '@koa/router';
import Koa from 'koa';
import koaLogger from 'koa-logger';
import { createKoaMiddleware } from 'trpc-koa-adapter';

import prepareInfrastructure from './prepareInfrastructure';
import appRouter from './trpc/appRouter';

async function main(): Promise<void> {
  prepareInfrastructure();

  const app = new Koa();
  app.use(koaLogger());

  const router = new Router();
  router.get('/ping', async (ctx) => (ctx.body = 'pong'));

  app.use(router.routes());
  app.use(router.allowedMethods());

  const adapter = createKoaMiddleware({
    router: appRouter,
    prefix: '/trpc',
  });
  app.use(adapter);

  app.listen(3003, async () => {
    console.info('Server is listening');
  });
}

main();
