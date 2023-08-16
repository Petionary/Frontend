import { ReactComponent as Search } from '../../../../assets/Search.svg';

const SearchInput = () => {
  return (
    <div className="relative flex w-[35rem] z-10 justify-between sm:w-full sm:justify-center">
      <input
        type="text"
        className="h-[3.5rem] w-[28.75rem] sm:w-[22.375rem] border-b-[0.13rem] bg-white border-primary placeholder:text-sm placeholder:text-gray-40 px-5 sm:bg-gray-20 sm:border-none"
        placeholder="내 반려동물과 가고싶은 장소를 검색해보세요."
      />
      <div className="h-[3.5rem] w-[3.5rem] bg-primary border-2 rounded-full flex items-center justify-center sm:absolute sm:right-[1.19rem] sm:border-none sm:bg-transparent">
        <Search className="sm:fill-primary fill-white" />
      </div>
    </div>
  );
};

export default SearchInput;
