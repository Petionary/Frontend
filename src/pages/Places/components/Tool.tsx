import FilterTool from './FilterTool';
import SortTool from './SortTool';

interface ToolProps {
  handleFilterToggle: () => void;
  filterToggle: boolean;
}

const Tool = ({ filterToggle, handleFilterToggle }: ToolProps) => {
  return (
    <section className="p-2 flex justify-between items-center w-full h-[10%]relative">
      <SortTool />
      <FilterTool filterToggle={filterToggle} handleFilterToggle={handleFilterToggle} />
    </section>
  );
};

export default Tool;
