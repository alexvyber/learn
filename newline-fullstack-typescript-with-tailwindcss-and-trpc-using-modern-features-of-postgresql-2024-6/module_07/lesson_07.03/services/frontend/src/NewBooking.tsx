import { FC } from 'react';
import clsx from 'clsx';

import { useBookingFlow } from './bookingFlowContext';
import ChooseTypePage from './ChooseTypePage';
import ChooseDatePage from './ChooseDatePage';
import EnterEmailPage from './EnterEmailPage';

const ThankYouPage: FC = () => <div>Thank You!</div>;

const flow = [ChooseTypePage, ChooseDatePage, EnterEmailPage, ThankYouPage];

const NewBooking: FC = () => {
  const { page, activePageIndex } = useBookingFlow(flow);

  return (
    <div className="min-h-screen w-full bg-cover bg-fixed py-12">
      <div className="mx-auto flex max-w-3xl flex-col justify-between rounded border border-gray-200 bg-gray-50 px-12 py-8 shadow-lg">
        <div>{page}</div>
        <div className="mx-auto mt-8 flex flex-row space-x-3">
          {flow.map((_, index) => (
            <div
              key={index}
              className={clsx(
                {
                  'bg-green-200 text-green-700': index === activePageIndex,
                  'bg-gray-400 text-white': index > activePageIndex,
                  'bg-gray-200 text-gray-400': index < activePageIndex,
                },
                'flex h-8 w-8 select-none items-center justify-center rounded-full',
              )}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBooking;
