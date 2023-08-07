import { ReactComponent as Search } from '../../../../assets/Search.svg';

const SearchInput = () => {
  return (
    <div className="relative flex w-[35rem] z-10 justify-between">
      <input
        type="text"
        className="h-[3.5rem] w-[28.75rem] border-b-[0.13rem] bg-inherit border-primary placeholder:text-sm placeholder:text-gray-40 px-5"
        placeholder="내 반려동물과 가고싶은 장소를 검색해보세요."
      />
      <div className="h-[3.5rem] w-[3.5rem] bg-primary border-2 rounded-full flex items-center justify-center">
        <Search />
      </div>
    </div>
  );
};

export default SearchInput;
