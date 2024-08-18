import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import NewBooking from './NewBooking';
import type { AppRouter } from '../../backend/src/trpc/appRouter';
import Providers from './Providers';
import useMockedRouter from './test-helpers/useMockedRouter';

describe('NewBooking', () => {
  useMockedRouter<AppRouter>((trpcMsw) =>
    trpcMsw.getServiceTypes.query(async (_req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.data([
          {
            id: 1,
            name: 'test-service-type',
            description: 'Test service type',
          },
        ]),
      ),
    ),
  );

  it('should mock trpc and render the output', async () => {
    render(
      <Providers>
        <NewBooking />
      </Providers>,
    );

    expect(await screen.findByText('test-service-type'));
  });
});
