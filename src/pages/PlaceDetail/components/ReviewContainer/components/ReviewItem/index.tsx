import { IReview } from '../../../../../../utils/type';
import ReviewContent from './components/ReviewContent';
import ReviewImageBox from './components/ReviewImageBox';
import ReviewInfo from './components/ReviewInfo';

interface ReviewItemProps {
  review: IReview;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <article className="bg-gray-20 w-[39.375rem] h-[14.125rem] rounded-[0.25rem] my-[0.625rem] sm:w-full p-[0.75rem] flex">
      <img
        src={review.profile_img}
        alt={review.author}
        className="w-[3.875rem] h-[3.875rem] rounded-full bg-[#D9D9D9] border-none"
      />
      <div className="mx-[0.87rem] h-[12.625rem] w-[32.875rem] overflow-hidden">
        <ReviewInfo author={review.author} postedDate={review.date} />
        {review.imageURLs?.length && <ReviewImageBox imageURLs={review.imageURLs as string[]} />}
        <ReviewContent imagesLen={review.imageURLs?.length} content={review.content} />
      </div>
    </article>
  );
};

export default ReviewItem;
