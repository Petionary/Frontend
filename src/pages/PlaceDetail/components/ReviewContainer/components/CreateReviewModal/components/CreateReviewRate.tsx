import { useState } from 'react';
import { ReactComponent as Star } from '../../../../../../../assets/icon_rate_empty.svg';
import { IReview } from '../../../../../../../utils/type';

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

  return (
    <section className="flex flex-col items-center mt-[3.06rem] mb-[1.5rem]">
      <div id="stars" className="flex mb-[0.88rem]">
        <Star
          className={`w-[2.75463rem] h-[2.75rem] mx-[0.14rem] cursor-pointer ${isFull(0)}`}
          onMouseOver={() => setGradeNum(1.0)}
          onClick={() => setGrade(1)}
          onMouseLeave={setInitial}
        />
        <Star
          className={`w-[2.75463rem] h-[2.75rem] mx-[0.14rem] cursor-pointer ${isFull(1)}`}
          onMouseOver={() => setGradeNum(2.0)}
          onClick={() => setGrade(2)}
          onMouseLeave={setInitial}
        />
        <Star
          className={`w-[2.75463rem] h-[2.75rem] mx-[0.14rem] cursor-pointer ${isFull(2)}`}
          onMouseOver={() => setGradeNum(3.0)}
          onClick={() => setGrade(3)}
          onMouseLeave={setInitial}
        />
        <Star
          className={`w-[2.75463rem] h-[2.75rem] mx-[0.14rem] cursor-pointer ${isFull(3)}`}
          onMouseOver={() => setGradeNum(4.0)}
          onClick={() => setGrade(4)}
          onMouseLeave={setInitial}
        />
        <Star
          className={`w-[2.75463rem] h-[2.75rem] mx-[0.14rem] cursor-pointer ${isFull(4)}`}
          onMouseOver={() => setGradeNum(5.0)}
          onClick={() => setGrade(5)}
          onMouseLeave={setInitial}
        />
      </div>
      <div className="flex">
        <p className="text-[1rem] font-[500] leading-[1.625rem] -tracking-[0.005rem] text-gray-100">
          {review.rate.toFixed(1)}
        </p>
        <p className="text-[1rem] font-[500] leading-[1.625rem] -tracking-[0.005rem] text-gray-50">
          /5.0
        </p>
      </div>
    </section>
  );
};

export default CreateReviewRate;
