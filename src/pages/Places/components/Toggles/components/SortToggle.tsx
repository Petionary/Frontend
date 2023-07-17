const SortToggle = () => {
  return (
    // 리덕스 스토에서 쿼리스트링 변경을 통해 정렬 옵션 반영
    <div className="flex justify-around w-[15rem] text-xs text-light">
      <span className="px-2 cursor-pointer hover:text-dark">거리</span>
      <span className="px-2 cursor-pointer hover:text-dark">리뷰</span>
      <span className="px-2 cursor-pointer hover:text-dark">좋아요</span>
      <span className="px-2 cursor-pointer hover:text-dark">업데이트</span>
    </div>
  );
};

export default SortToggle;
