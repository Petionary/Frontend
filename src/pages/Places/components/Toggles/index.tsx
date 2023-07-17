import FilterToggle from './components/FilterToggle';
import SortToggle from './components/SortToggle';

interface TogglesProps {
  handleFilterToggle: () => void;
  filterToggle: boolean;
}

const Toggles = ({ filterToggle, handleFilterToggle }: TogglesProps) => {
  return (
    <section className="p-2 flex justify-between items-center w-full h-[10%]relative">
      <SortToggle />
      <FilterToggle filterToggle={filterToggle} handleFilterToggle={handleFilterToggle} />
    </section>
  );
};

export default Toggles;
