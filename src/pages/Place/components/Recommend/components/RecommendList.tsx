import { useState } from 'react';
import { ReactComponent as Arrow } from '../../../../../assets/Arrow.svg';

const arr = [1, 2, 3];

const RecommendList = () => {
  const [count, setCount] = useState(0);

  const handlePrev = () => {
    if (count === 0) setCount(arr.length - 1);
    else setCount((count - 1) % arr.length);
  };

  const handleNext = () => {
    setCount((count + 1) % arr.length);
  };

  return (
    <div className="relative w-[80rem] h-[29.75rem] mx-auto -mt-[32.5rem] rounded-[0.5rem]">
      <span
        className="absolute z-10 left-0 w-[3rem] h-[3rem] flex items-center justify-center top-[9.75rem]"
        onClick={handlePrev}
      >
        <Arrow className="-rotate-90 stroke-white" />
      </span>
      <div className="relative flex overflow-hidden rounded-[0.5rem]">
        {arr.map(el => (
          <div
            key={el}
            className={`min-w-[80rem] h-[22.75rem] bg-gray-40 rounded-[0.5rem] duration-500 -translate-x-[${
              count * 80
            }rem]`}
          >
            {el}
          </div>
        ))}
      </div>
      <span
        className="absolute z-10 right-0 w-[3rem] h-[3rem] flex items-center justify-center top-[9.75rem]"
        onClick={handleNext}
      >
        <Arrow className="rotate-90 stroke-white" />
      </span>
    </div>
  );
};

export default RecommendList;
