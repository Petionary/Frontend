import { ChangeEvent } from 'react';
import ReviewSortItem from './ReviewSortItem';

interface ReviewSortOptionsProps {
  reviewSortParams: { sort: string; order: 'asc' | 'desc' };
  // eslint-disable-next-line no-unused-vars
  onChangeReviewSortParams: (e: ChangeEvent<HTMLInputElement>) => void;
  setSortParams: React.Dispatch<React.SetStateAction<{ sort: string; order: 'asc' | 'desc' }>>;
}

const ReviewSortOptions = ({ setSortParams, reviewSortParams }: ReviewSortOptionsProps) => {
  const handleSortDate = () => {
    setSortParams({ sort: 'date', order: 'desc' });
  };

  const handleSortDesc = () => {
    setSortParams({ sort: 'rate', order: 'desc' });
  };

  const handleSortAsc = () => {
    setSortParams({ sort: 'rate', order: 'asc' });
  };

  return (
    <div className="flex">
      <ReviewSortItem
        name="sort"
        value="date"
        onChange={handleSortDate}
        checked={reviewSortParams.sort === 'date'}
      />
      <ReviewSortItem
        name="sort"
        value="rate"
        rate_order="desc"
        onChange={handleSortDesc}
        checked={reviewSortParams.sort === 'rate' && reviewSortParams.order === 'desc'}
      />
      <ReviewSortItem
        name="sort"
        value="rate"
        rate_order="asc"
        onChange={handleSortAsc}
        checked={reviewSortParams.sort === 'rate' && reviewSortParams.order === 'asc'}
      />
    </div>
  );
};

export default ReviewSortOptions;
