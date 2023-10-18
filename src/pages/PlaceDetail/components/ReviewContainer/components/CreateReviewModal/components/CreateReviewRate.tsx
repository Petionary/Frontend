import { useState } from 'react';
import { ReactComponent as Star } from '../../../../../../../assets/icon_rate_empty.svg';
import { IReview } from '../../../../../../../utils/type';
import SelectedRate from './SelectedRate';

interface CreateReviewRateProps {
  review: IReview;
  setReview: React.Dispatch<React.SetStateAction<IReview>>;
}

const CreateReviewRate = ({ review, setReview }: CreateReviewRateProps) => {
  const [gradeNum, setGradeNum] = useState(0);

  const setGrade = (rate: number) => {
    setReview({ ...review, rate });
  };

  const isFull = (num: number) => {
    if (review.rate === 0 && gradeNum > num) return 'fill-primary';
    if (review.rate > num || gradeNum > num) return 'fill-primary';
    else return 'fill-[#eeeeee]';
  };

  const setInitial = () => {
    setGradeNum(0);
  };

  const STARS = [0, 1, 2, 3, 4];

  return (
    <section className="flex flex-col items-center mt-[3.06rem] mb-[1.5rem]">
      <div className="flex mb-[0.88rem]">
        {STARS.map(star => (
          <Star
            key={star}
            className={`w-[2.75463rem] h-[2.75rem] mx-[0.14rem] cursor-pointer ${isFull(star)}`}
            onMouseOver={() => setGradeNum(star + 1)}
            onClick={() => setGrade(star + 1)}
            onMouseLeave={setInitial}
          />
        ))}
      </div>
      <SelectedRate rate={review.rate} />
    </section>
  );
};

export default CreateReviewRate;
