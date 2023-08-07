import { ChangeEvent } from 'react';
import CategoryFilter from './components/CategoryFilter';
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
  const open = filterToggle ? 'lg:-translate-y-[115%] -translate-x-0' : 'translate-y-[15%]';

  return (
    <aside
      className={`flex flex-col justify-between duration-500 w-[21.5rem] rounded-bl-[7.5rem] border p-8 h-[27.625rem] bg-[#fff] shadow-lg top-8 right-[15rem] absolute translate-y-10 ${open} z-10`}
    >
      <CategoryFilter params={params} setParams={setParams} handleParams={handleParams} />
      {/* <SearchFilter params={params} setParams={setParams} handleParams={handleParams} /> */}
      <AddressFilter params={params} setParams={setParams} handleParams={handleParams} />
      <Reset resetParams={resetParams} />
    </aside>
  );
};

export default Filter;
