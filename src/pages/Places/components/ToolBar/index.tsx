import { ChangeEvent } from 'react';
import { TPlaceParam } from '../..';
import FilterToggle from './components/FilterToggle';
import SortToggle from './components/SortToggle';
import { ReactComponent as Search } from '../../../../assets/Search.svg';

interface TogglesProps {
  handleFilterToggle: () => void;
  filterToggle: boolean;
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ToolBar = ({ filterToggle, handleFilterToggle, params, handleParams }: TogglesProps) => {
  return (
    <section className="px-[20rem] flex justify-between items-center w-full h-[6.125rem] relative z-20 bg-white">
      <SortToggle params={params} handleParams={handleParams} />

      <FilterToggle filterToggle={filterToggle} handleFilterToggle={handleFilterToggle} />
    </section>
  );
};

export default ToolBar;

{
  /* <div className="py-5 flex flex-col items-center w-full h-[34rem] bg-primary">

</div> */
}
