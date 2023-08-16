import { ReactComponent as ResetIcon } from '../../../../../assets/reset.svg';

interface FilterTitleProps {
  filter: 'Filter' | 'Search';
  resetFilter: () => void;
}

const FilterTitle = ({ filter, resetFilter }: FilterTitleProps) => {
  return (
    <div className="flex justify-between px-2 items-center">
      <span className="text-gray-100 text-xl">{filter}</span>
      <span className="text-light cursor-pointer hover:font-bold" onClick={resetFilter}>
        <ResetIcon />
      </span>
    </div>
  );
};

export default FilterTitle;
