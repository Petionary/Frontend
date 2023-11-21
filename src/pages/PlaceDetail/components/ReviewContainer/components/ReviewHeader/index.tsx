import { ChangeEvent } from 'react';
import ReviewHeaderTitle from './components/ReviewHeaderTitle';
import ReviewSortOptions from './components/ReviewSortOptions';

interface ReviewHeaderProps {
  reviewSortParams: { sort: string; order: 'asc' | 'desc' };
  // eslint-disable-next-line no-unused-vars
  onChangeReviewSortParams: (e: ChangeEvent<HTMLInputElement>) => void;
  setSortParams: React.Dispatch<React.SetStateAction<{ sort: string; order: 'asc' | 'desc' }>>;
}

const ReviewHeader = ({
  reviewSortParams,
  onChangeReviewSortParams,
  setSortParams,
}: ReviewHeaderProps) => {
  // place.reivews.length
  // parmas
  return (
    <section className="flex justify-between mt-[3.75rem]">
      <ReviewHeaderTitle />
      <ReviewSortOptions
        reviewSortParams={reviewSortParams}
        onChangeReviewSortParams={onChangeReviewSortParams}
        setSortParams={setSortParams}
      />
    </section>
  );
};

export default ReviewHeader;
