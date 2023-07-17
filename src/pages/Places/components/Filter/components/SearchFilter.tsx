import Input from '../../../../../components/Input/Input';
import { ReactComponent as BackIcon } from '../../../../../assets/BackIcon.svg';

const SearchFilter = () => {
  return (
    <div>
      <span className="text-xs text-text">검색</span>
      <div className="relative z-0">
        <Input width="full" rounded name="search" position="relative" />
        <BackIcon className="absolute top-2 right-5 w-5 hover:stroke-slate-500" />
      </div>
    </div>
  );
};

export default SearchFilter;
