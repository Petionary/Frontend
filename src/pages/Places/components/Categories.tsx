const Categories = () => {
  const styles =
    'min-w-[3.5rem] text-xs text-center rounded-xl cursor-pointer hover:font-bold border border-light p-2';

  return (
    <div className="w-[30%] flex justify-between items-center sm:w-full">
      <span className={styles}>카페</span>
      <span className={styles}>음식점</span>
      <span className={styles}>병원</span>
      <span className={styles}>공원</span>
      <span className={styles}>기타</span>
    </div>
  );
};

export default Categories;
