import { ReactComponent as ArrowIcon } from '../../../assets/ArrowIcon.svg';

interface FilterToolProps {
  handleFilterToggle: () => void;
  filterToggle: boolean;
}

const FilterTool = ({ filterToggle, handleFilterToggle }: FilterToolProps) => {
  const direction = filterToggle
    ? 'rotate-0 group-hover:rotate-180'
    : 'rotate-180 group-hover:rotate-0';
  return (
    <span
      onClick={handleFilterToggle}
      className="w-[3.5rem] text-xs px-2 flex items-center justify-between hover:font-bold cursor-pointer group"
    >
      <span>필터</span>
      <ArrowIcon className={`duration-500 ${direction}`} />
    </span>
  );
};

export default FilterTool;
