import { ReactComponent as Search } from '../../../../../assets/Search.svg';

const HeaderSearch = () => {
  return (
    <div className="flex items-center sm:hidden">
      <input
        type="text"
        className="w-[29rem] h-[2.75rem] bg-gray-20 rounded-full placeholder::text-gray-70 text-sm px-7"
        placeholder="검색어를 입력해 주세요."
      />
      <Search className="-ml-[3rem] cursor-pointer" />
    </div>
  );
};

export default HeaderSearch;
