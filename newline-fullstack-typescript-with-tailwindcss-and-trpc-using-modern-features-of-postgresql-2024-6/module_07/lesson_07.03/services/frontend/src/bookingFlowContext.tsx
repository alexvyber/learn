import { FC, createContext, useMemo, useState } from 'react';

import { ServiceTypeId } from '@easybooking/schema';

export type BookingFlowState = {
  serviceTypeId?: ServiceTypeId;
  description?: string;
  time?: Date;
  email?: string;
};

type BookingFlowContext = {
  onGoBack: () => void;
  onProceed: () => void;

  state: BookingFlowState;
  updateState: (fields: Partial<BookingFlowState>) => void;
};

const ctxMissing = () => {
  throw new Error('bookingContext not set');
};

const bookingFlowContext = createContext<BookingFlowContext>({
  onGoBack: ctxMissing,
  onProceed: ctxMissing,
  state: {},
  updateState: ctxMissing,
});

export function useBookingFlow(flow: FC[]): {
  page: JSX.Element;
  activePageIndex: number;
  setActivePageIndex: (i: number) => void;
} {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [state, setState] = useState<BookingFlowState>({});
  const value = useMemo(
    () => ({
      onGoBack: () => setActivePageIndex((i) => i - 1),
      onProceed: () => setActivePageIndex((i) => i + 1),
      state,
      updateState: (fields: Partial<BookingFlowState>) =>
        setState({ ...state, ...fields }),
    }),
    [state],
  );

  const Contents = flow[activePageIndex];

  const page = (
    <bookingFlowContext.Provider value={value}>
      <Contents />
    </bookingFlowContext.Provider>
  );

  return { page, activePageIndex, setActivePageIndex };
}

export default bookingFlowContext;
