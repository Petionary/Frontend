import { ChangeEvent } from 'react';
import { TPlaceParam } from '../..';
import FilterToggle from './components/FilterToggle';
import SortToggle from './components/SortToggle';

interface TogglesProps {
  handleFilterToggle: () => void;
  filterToggle: boolean;
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Toggles = ({ filterToggle, handleFilterToggle, params, handleParams }: TogglesProps) => {
  return (
    <section className="p-2 flex justify-between items-center w-full h-[10%]relative">
      <SortToggle params={params} handleParams={handleParams} />
      <FilterToggle filterToggle={filterToggle} handleFilterToggle={handleFilterToggle} />
    </section>
  );
};

export default Toggles;
