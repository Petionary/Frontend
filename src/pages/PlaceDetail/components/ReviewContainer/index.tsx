import useInput from '../../../../hooks/useInput';
import ReviewHeader from './components/ReviewHeader';
import CreateReviewButton from './components/CreateReviewButton';
import useToggle from '../../../../hooks/useToggle';
import useScrollLock from '../../../../hooks/useScrollLock';
import { useEffect } from 'react';
import ReviewBox from './components/ReviewBox';
import CreateReviewModal from './components/CreateReviewModal';

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
        <CreateReviewModal
          createReviewToggle={createReviewToggle}
          handleCreateReviewToggle={hanndleCreateReviewToggle}
        />
      )}
      <ReviewBox />
    </section>
  );
};

export default ReviewContainer;
