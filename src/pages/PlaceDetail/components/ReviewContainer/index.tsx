import useInput from '../../../../hooks/useInput';
import ReviewHeader from './components/ReviewHeader';
import CreateReviewButton from './components/CreateReviewButton';
import useToggle from '../../../../hooks/useToggle';
import useScrollLock from '../../../../hooks/useScrollLock';
import { useEffect } from 'react';

const ReviewContainer = () => {
  const { input, handleInputChange, setInput } = useInput<{ sort: string; order: 'asc' | 'desc' }>({
    sort: 'date',
    order: 'desc',
  });

  const [createReviewToggle, hanndleCreateReviewToggle] = useToggle();
  const { lock, unlock } = useScrollLock();

  useEffect(() => {
    if (createReviewToggle) lock();
    else unlock();
  });

  return (
    <section className="w-full px-[16.67vw]">
      <ReviewHeader
        reviewSortParams={input}
        onChangeReviewSortParams={handleInputChange}
        setSortParams={setInput}
      />
      <CreateReviewButton
        createReviewToggle={createReviewToggle}
        handleCreateReviewToggle={hanndleCreateReviewToggle}
      />
      {createReviewToggle && (
        <div className="w-[100vw] h-[100vh] bg-gray-100 absolute top-0 left-0 opacity-[0.5]" />
      )}
      <dialog
        open={createReviewToggle}
        className="w-[52.875rem] h-[85vh] bg-background absolute top-[6vh]"
      >
        open
      </dialog>
    </section>
  );
};

export default ReviewContainer;
