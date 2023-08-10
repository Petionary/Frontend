import { ChangeEvent } from 'react';
import { TPlaceParam } from '../..';
import FilterToggle from './components/FilterToggle';
import SortToggle from './components/SortToggle';
import { ReactComponent as Search } from '../../../../assets/Search.svg';
import SearchInput from '../SearchInput';

interface TogglesProps {
  handleFilterToggle: () => void;
  filterToggle: boolean;
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ToolBar = ({ filterToggle, handleFilterToggle, params, handleParams }: TogglesProps) => {
  return (
    <section className="px-[20rem] flex flex-col justify-between items-center w-full h-[10.875rem] sm:h-[8.69rem] relative z-10 bg-white sm:px-0 sm:bg-background">
      <div className="flex w-full h-[6.125rem] items-center justify-between sm:border-b sm:h-[4.12rem] sm:px-[0.75rem]">
        <SortToggle params={params} handleParams={handleParams} />
        <FilterToggle filterToggle={filterToggle} handleFilterToggle={handleFilterToggle} />
      </div>
      <SearchInput />
    </section>
  );
};

export default ToolBar;

{
  /* <div className="py-5 flex flex-col items-center w-full h-[34rem] bg-primary">

</div> */
}
