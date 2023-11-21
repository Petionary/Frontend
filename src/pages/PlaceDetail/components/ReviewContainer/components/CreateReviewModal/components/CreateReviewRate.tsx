import { useState } from 'react';
import { ReactComponent as StarLeft } from '../../../../../../../assets/icon_star_left.svg';
import { ReactComponent as StarRight } from '../../../../../../../assets/icon_star_right.svg';
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
    if ((review.rate === 0 && gradeNum >= num) || review.rate >= num || gradeNum >= num)
      return 'fill-primary';
    else return 'fill-[#eeeeee]';
  };

  const setInitial = () => {
    setGradeNum(0);
  };

  const STARS = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  return (
    <section className="flex flex-col items-center mt-[3.06rem] mb-[1.5rem]">
      <div className="flex mb-[0.88rem]">
        {STARS.map((star, idx) => {
          if (idx % 2 === 0)
            return (
              <StarLeft
                key={star}
                className={`w-[1.30988rem] h-[2.75rem] cursor-pointer border-gray-10 ${isFull(
                  star,
                )}`}
                onMouseOver={() => setGradeNum(star)}
                onClick={() => setGrade(star)}
                onMouseLeave={setInitial}
              />
            );
          else
            return (
              <StarRight
                key={star}
                className={`w-[1.30988rem] h-[2.75rem] mr-[0.14rem] cursor-pointer ${isFull(star)}`}
                onMouseOver={() => setGradeNum(star)}
                onClick={() => setGrade(star)}
                onMouseLeave={setInitial}
              />
            );
        })}
      </div>
      <SelectedRate rate={review.rate} />
    </section>
  );
};

export default CreateReviewRate;
