import Input from '../../../../../components/Input/Input';
import { ReactComponent as BackIcon } from '../../../../../assets/BackIcon.svg';
import { ChangeEvent } from 'react';
import { TPlaceParam } from '../../..';

interface Props {
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilter = ({ params, handleParams }: Props) => {
  return (
    <div>
      <span className="text-xs text-text">검색</span>
      <div className="relative z-0">
        <Input
          width="full"
          rounded
          name="search"
          position="relative"
          value={params.search}
          onChange={handleParams}
        />
        <BackIcon className="absolute top-2 right-5 w-5 hover:stroke-slate-500" />
      </div>
    </div>
  );
};

export default SearchFilter;
