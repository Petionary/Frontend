interface RecommendedTitleProps {
  type: 'best' | 'new';
}

const TITLE_MESSAGE = {
  best: {
    title: 'BEST PLACE',
    message: '관심 지역 주변 가장 평점이 높은 곳이에요.',
  },
  new: {
    title: 'NEW PLACE',
    message: '이번 주 새롭게 등록된 장소들이에요.',
  },
};

const RecommendedTitle = ({ type }: RecommendedTitleProps) => {
  return (
    <div>
      <h1 className="text-[2.625rem] text-gray-100 font-[700] leading-[3rem] -tracking-[0.01313rem]">
        {TITLE_MESSAGE[type].title}
      </h1>
      <p className="text-[1.25rem] text-gray-50 font-[600] leading-[2rem] -tracking-[0.00625rem]">
        {TITLE_MESSAGE[type].message}
      </p>
    </div>
  );
};

export default RecommendedTitle;
