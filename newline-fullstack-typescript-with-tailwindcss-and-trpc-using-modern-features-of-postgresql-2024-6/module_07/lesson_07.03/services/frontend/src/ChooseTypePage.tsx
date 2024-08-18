import { FC, useContext } from 'react';

import bookingFlowContext from './bookingFlowContext';
import { PrimaryButton } from './shared-components/buttons';
import trpc from './trpc';

const ChooseTypePage: FC = () => {
  const { onProceed, state, updateState } = useContext(bookingFlowContext);
  const q = trpc.getServiceTypes.useQuery();

  return (
    <div>
      <div className="text-2xl font-bold">How can we help you?</div>
      <div className="text-gray-700">
        We offer multiple services. Let us know what you need and we'll get you
        started.
      </div>
      <div className="my-4 flex flex-col">
        <textarea
          value={state.description}
          onChange={({ target }) => updateState({ description: target.value })}
          className="rounded border border-gray-300 p-2"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <h1 className="font-bold">Choose a service type:</h1>
        {q.isSuccess && (
          <ul className="space-y-2">
            {q.data.map((serviceType) => (
              <li
                key={serviceType.id}
                className="flex flex-row items-center space-x-2"
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="type"
                  value={serviceType.id}
                  checked={state.serviceTypeId === serviceType.id}
                  onChange={() =>
                    updateState({
                      serviceTypeId: serviceType.id,
                    })
                  }
                  id={`type-${serviceType.id}`}
                />
                <label
                  className="cursor-pointer"
                  htmlFor={`type-${serviceType.id}`}
                >
                  {serviceType.name}
                </label>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-row justify-end">
          <PrimaryButton onClick={onProceed}>Choose Time</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ChooseTypePage;
