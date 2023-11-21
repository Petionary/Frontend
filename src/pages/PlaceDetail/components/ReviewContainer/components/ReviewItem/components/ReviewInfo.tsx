import getPostedDate from '../../../../../../../utils/getPostedDate';
import Rate from '../../../../../../../components/Rate';

interface ReviewInfoProps {
  author: string;
  postedDate: string;
}

const ReviewInfo = ({ author, postedDate }: ReviewInfoProps) => {
  return (
    <div className="mb-[0.5rem]">
      <div className="text-gray-60 text-[0.75rem] font-[400] leading-[1.375rem] -tracking-[0.00375rem] mb-[0.5rem]">
        <span>{author}</span>
        <span className="mx-[0.5rem]">・</span>
        <span>{getPostedDate(postedDate)}</span>
      </div>
      <Rate rate={3.5} grade_only />
    </div>
  );
};

export default ReviewInfo;
