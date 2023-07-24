interface FilterTitleProps {
  filter: '주소검색' | '검색' | '카테고리';
  resetFilter: () => void;
}

const FilterTitle = ({ filter, resetFilter }: FilterTitleProps) => {
  return (
    <div className="flex justify-between px-2">
      <span className="text-text">{filter}</span>
      <span className="text-light cursor-pointer hover:font-bold" onClick={resetFilter}>
        초기화
      </span>
    </div>
  );
};

export default FilterTitle;
