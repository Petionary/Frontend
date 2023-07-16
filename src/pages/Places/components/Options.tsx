import { ReactComponent as ArrowIcon } from '../../../assets/ArrowIcon.svg';

const Options = () => {
  return (
    <div className="flex justify-between items-center min-w-[25%] sm:w-full relative">
      <div className="flex justify-around w-[15rem] text-xs text-light">
        <span className="px-2 cursor-pointer hover:text-dark">거리</span>
        <span className="px-2 cursor-pointer hover:text-dark">리뷰</span>
        <span className="px-2 cursor-pointer hover:text-dark">좋아요</span>
        <span className="px-2 cursor-pointer hover:text-dark">업데이트</span>
      </div>
      <span className="w-[3.5rem] text-xs px-2 flex items-center justify-between">
        필터 <ArrowIcon className="duration-500" />
      </span>
    </div>
  );
};

export default Options;
