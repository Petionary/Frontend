const CategoryFilter = () => {
  const styles = 'min-w-[3.5rem] rounded-xl cursor-pointer hover:font-bold border border-light p-2';

  return (
    <div>
      <span className="text-xs text-text">카테고리</span>
      <div className="w-full text-xs text-light text-center flex justify-between items-center p-2 m-2 flex-wrap">
        <span className={styles}>카페</span>
        <span className={styles}>음식점</span>
        <span className={styles}>병원</span>
        <span className={styles}>공원</span>
        <span className={styles}>기타</span>
      </div>
    </div>
  );
};

export default CategoryFilter;
