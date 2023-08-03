import { ChangeEvent } from 'react';
import CategoryFilter from './components/CategoryFilter';
import SearchFilter from './components/SearchFilter';
import { TPlaceParam } from '../..';
import AddressFilter from './components/AddressFilter';
import Reset from './components/Reset';

interface Props {
  filterToggle: boolean;
  params: TPlaceParam;
  resetParams: () => void;
  setParams: React.Dispatch<React.SetStateAction<TPlaceParam>>;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Filter = ({ filterToggle, params, handleParams, resetParams, setParams }: Props) => {
  const open = filterToggle ? 'lg:-translate-x-[12%] -translate-x-0' : 'translate-x-[110%]';

  return (
    <aside
      className={`flex flex-col justify-between duration-500 w-[25rem] rounded-lg border p-8 sm:w-full sm:h-[80%] h-[30rem] bg-[#fff] shadow-lg right-0 absolute translate-y-10 ${open} z-10`}
    >
      <CategoryFilter params={params} setParams={setParams} handleParams={handleParams} />
      <SearchFilter params={params} setParams={setParams} handleParams={handleParams} />
      <AddressFilter params={params} setParams={setParams} handleParams={handleParams} />
      <Reset resetParams={resetParams} />
    </aside>
  );
};

export default Filter;
