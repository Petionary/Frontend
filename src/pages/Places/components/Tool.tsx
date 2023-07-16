import FilterTool from './FilterTool';
import SortTool from './SortTool';

const Tool = () => {
  return (
    <section className="p-2 flex justify-between items-center w-full relative">
      <SortTool />
      <FilterTool />
    </section>
  );
};

export default Tool;
