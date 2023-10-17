import Rate from '../../../../../components/Rate';
import getPostedDate from '../../../../../utils/getPostedDate';
import { IReview } from '../../../../../utils/type';

interface ReviewItemProps {
  reivew: IReview;
}

const ReviewItem = ({ reivew }: ReviewItemProps) => {
  return (
    <article className="bg-gray-20 w-[39.375rem] h-[14.125rem] rounded-[0.25rem] my-[0.625rem] sm:w-full p-[0.75rem] flex">
      <img
        src={reivew.profile_img}
        alt={reivew.author}
        className="w-[3.875rem] h-[3.875rem] rounded-full bg-[#D9D9D9] border-none"
      />
      <div className="mx-[0.87rem] h-[12.625rem] w-[32.875rem] overflow-hidden">
        <div className="mb-[0.5rem]">
          <div className="text-gray-60 text-[0.75rem] font-[400] leading-[1.375rem] -tracking-[0.00375rem] mb-[0.5rem]">
            <span>{reivew.author}</span>
            <span className="mx-[0.5rem]">・</span>
            <span>{getPostedDate(reivew.date)}</span>
          </div>
          <Rate rate={3.5} grade_only />
        </div>
        {reivew.imageURLs?.length && (
          <div className="flex mb-[0.5rem]">
            {reivew.imageURLs?.map((url, idx) => (
              <img
                key={url}
                src={url}
                alt={idx.toString()}
                className="w-[5rem] h-[5rem] bg-gray-40 rounded-[0.13rem] mr-[0.5rem]"
              />
            ))}
          </div>
        )}
        <p
          className={`text-[1rem] text-gray-90 font-[500] leading-[1.625rem] -tracking-[0.005rem] ${
            reivew.imageURLs?.length ? 'line-clamp-2' : 'line-clamp-5'
          }`}
        >
          {reivew.content}
        </p>
      </div>
    </article>
  );
};

export default ReviewItem;
