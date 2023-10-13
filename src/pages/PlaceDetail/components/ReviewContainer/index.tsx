import useInput from '../../../../hooks/useInput';
import ReviewHeader from './components/ReviewHeader';
import CreateReviewButton from './components/CreateReviewButton';
import useToggle from '../../../../hooks/useToggle';

const ReviewContainer = () => {
  const { input, handleInputChange, setInput } = useInput<{ sort: string; order: 'asc' | 'desc' }>({
    sort: 'date',
    order: 'desc',
  });

  const [createReviewToggle, hanndleCreateReviewToggle] = useToggle();

  return (
    <section className="w-full px-[16.67vw] relative">
      <ReviewHeader
        reviewSortParams={input}
        onChangeReviewSortParams={handleInputChange}
        setSortParams={setInput}
      />
      <CreateReviewButton
        createReviewToggle={createReviewToggle}
        handleCreateReviewToggle={hanndleCreateReviewToggle}
      />
      <dialog
        open={createReviewToggle}
        className="w-[52.875rem] h-[51.8125rem] bg-background absolute"
      >
        open
      </dialog>
    </section>
  );
};

export default ReviewContainer;
