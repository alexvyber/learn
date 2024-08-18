import { Router } from '@trpc/server';
import { AnyRouterDef } from '@trpc/server/dist/core/router';
import { SetupServer, setupServer } from 'msw/node';
import { createTRPCMsw } from 'msw-trpc';
import superjson from 'superjson';
import { afterAll, beforeAll } from 'vitest';

function useMockedRouter<T extends Router<AnyRouterDef>>(
  makeMocks: (
    trpcMsw: ReturnType<typeof createTRPCMsw<T>>,
  ) => Parameters<typeof setupServer>[0],
): () => SetupServer {
  const trpcMsw = createTRPCMsw<T>({
    transformer: { input: superjson, output: superjson },
  });
  let server: SetupServer;

  beforeAll(() => {
    server = setupServer(makeMocks(trpcMsw));
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  return () => server;
}

export default useMockedRouter;
