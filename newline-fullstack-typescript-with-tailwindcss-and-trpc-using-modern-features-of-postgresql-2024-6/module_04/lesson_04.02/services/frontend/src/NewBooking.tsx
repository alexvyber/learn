import { FC, useState } from 'react';

const ChooseTypePage: FC = () => <div>Choose type</div>;
const ChooseDatePage: FC = () => <div>Choose date</div>;
const EnterEmailPage: FC = () => <div>Enter email</div>;

const NewBooking: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen w-full bg-gray-50 py-12">
      <div className="mx-auto flex max-w-3xl flex-col rounded border border-gray-200 bg-white px-12 py-8 shadow-lg">
        {currentPage === 0 && <ChooseTypePage />}
        {currentPage === 1 && <ChooseDatePage />}
        {currentPage === 2 && <EnterEmailPage />}

        <div>
          <button onClick={() => setCurrentPage(currentPage - 1)}>Back</button>
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default NewBooking;
