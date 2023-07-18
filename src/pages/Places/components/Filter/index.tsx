import { ChangeEvent } from 'react';
import Dropdown from '../../../../components/Dropdown';
import CategoryFilter from './components/CategoryFilter';
import SearchFilter from './components/SearchFilter';
import { TPlaceParam } from '../..';

interface Props {
  filterToggle: boolean;
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
  resetParams: () => void;
}

const Filter = ({ filterToggle, params, handleParams, resetParams }: Props) => {
  const open = filterToggle ? 'lg:-translate-x-[12%] -translate-x-0' : 'translate-x-[110%]';
  return (
    <aside
      className={`flex flex-col justify-between duration-500 w-[25rem] rounded-lg border p-8 sm:w-full h-[30rem] bg-[#fff] shadow-lg right-0 absolute translate-y-10 ${open} z-10`}
    >
      <CategoryFilter params={params} handleParams={handleParams} />
      <SearchFilter params={params} handleParams={handleParams} />
      <div className="flex flex-col">
        <span className="text-xs text-text">주소검색</span>
        <div className="flex justify-between p-2">
          <Dropdown>
            <option>시도</option>
          </Dropdown>
          <Dropdown>
            <option>시군구</option>
          </Dropdown>
          <Dropdown>
            <option>읍동면</option>
          </Dropdown>
        </div>
      </div>
      <div
        className="cursor-pointer text-xs mx-auto text-light hover:text-dark"
        onClick={resetParams}
      >
        필터 초기화
      </div>
    </aside>
  );
};

export default Filter;
