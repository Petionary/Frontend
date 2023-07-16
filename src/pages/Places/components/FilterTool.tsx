import { ReactComponent as ArrowIcon } from '../../../assets/ArrowIcon.svg';

const FilterTool = () => {
  return (
    <span className="w-[3.5rem] text-xs px-2 flex items-center justify-between hover:font-bold cursor-pointer group">
      <span>필터</span>
      <ArrowIcon className="duration-500 rotate-180 group-hover:rotate-0" />
    </span>
  );
};

export default FilterTool;
