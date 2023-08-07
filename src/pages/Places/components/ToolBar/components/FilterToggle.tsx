import { ReactComponent as ArrowIcon } from '../../../../../assets/ArrowIcon.svg';
import { ReactComponent as Filter } from '../../../../../assets/filter.svg';

interface FilterToggleProps {
  handleFilterToggle: () => void;
  filterToggle: boolean;
}

const FilterToggle = ({ filterToggle, handleFilterToggle }: FilterToggleProps) => {
  const direction = filterToggle
    ? 'rotate-0 group-hover:rotate-180'
    : 'rotate-180 group-hover:rotate-0';

  return (
    <span
      onClick={handleFilterToggle}
      className="w-[3.5rem] text-xs px-2 flex items-center justify-between hover:font-bold cursor-pointer group"
    >
      {/* <span>필터</span>
      <ArrowIcon className={`duration-500 ${direction}`} /> */}
      <Filter />
    </span>
  );
};

export default FilterToggle;
