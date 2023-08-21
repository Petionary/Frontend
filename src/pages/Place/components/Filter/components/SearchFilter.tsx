import Input from '../../../../../components/Input';
import { ChangeEvent } from 'react';
import { TPlaceParam } from '../../..';
import FilterTitle from './FilterTitle';

interface SearchFilterProps {
  params: TPlaceParam;
  setParams: React.Dispatch<React.SetStateAction<TPlaceParam>>;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const SearchFilter = ({ params, setParams, handleParams }: SearchFilterProps) => {
  const resetSearch = () => {
    setParams({ ...params, search: '' });
  };
  return (
    <div className="text-xs">
      <FilterTitle filter="Search" resetFilter={resetSearch} />
      <div className="relative z-0 my-2 p-2">
        <Input
          width="full"
          rounded
          name="search"
          position="relative"
          value={params.search}
          onChange={handleParams}
          margin="mx-1"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
