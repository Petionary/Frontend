const SortTool = () => {
  return (
    <div className="flex justify-around w-[15rem] text-xs text-light">
      <span className="px-2 cursor-pointer hover:text-dark">거리</span>
      <span className="px-2 cursor-pointer hover:text-dark">리뷰</span>
      <span className="px-2 cursor-pointer hover:text-dark">좋아요</span>
      <span className="px-2 cursor-pointer hover:text-dark">업데이트</span>
    </div>
  );
};

export default SortTool;
