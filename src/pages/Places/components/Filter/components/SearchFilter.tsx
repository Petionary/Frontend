import Input from '../../../../../components/Input/Input';
import { ChangeEvent } from 'react';
import { TPlaceParam } from '../../..';

interface Props {
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilter = ({ params, handleParams }: Props) => {
  return (
    <div className="text-xs">
      <div className="flex justify-between px-2">
        <span className="text-text">검색</span>
        <span className="text-light cursor-pointer hover:font-bold">초기화</span>
      </div>
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
