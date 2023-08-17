import { ReactComponent as Filter } from '../../../../../assets/filter.svg';

interface FilterToggleProps {
  handleFilterToggle: () => void;
}

const FilterToggle = ({ handleFilterToggle }: FilterToggleProps) => {
  return (
    <span
      onClick={handleFilterToggle}
      className="w-[3.5rem] text-xs px-2 flex items-center justify-between hover:font-bold cursor-pointer group"
    >
      <Filter />
    </span>
  );
};

export default FilterToggle;
