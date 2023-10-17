import { IReview } from '../../../../../utils/type';
import ReviewItem from './ReviewItem';

const mockReview: IReview = {
  author: 'tmddus',
  profile_img: '',
  date: new Date().toLocaleString(),
  content: '리뷰를 입력해 주세요.',
  imageURLs: ['1', '2'],
  rate: 0.0,
};

const ReviewBox = () => {
  return (
    <>
      <section className="grid grid-cols-auto-fill-review place-items-center pt-[2.5rem] pb-[3.75rem] border-b-[0.0625rem] border-gray-20">
        <ReviewItem reivew={mockReview} />
        <ReviewItem reivew={mockReview} />
        <ReviewItem reivew={mockReview} />
        <ReviewItem reivew={mockReview} />
      </section>
      <button className="w-full text-[1rem] font-[500] leading-[1.625rem] -tracking-[0.005rem] text-center py-[1.5rem] border-b-[0.0625rem] border-gray-40">
        후기 더보기
      </button>
    </>
  );
};

export default ReviewBox;
