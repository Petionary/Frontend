const PetPage = () => {
  return (
    <ul className="w-full grid grid-cols-2 gap-x-5 md:grid-cols-1 sm:grid-cols-1">
      <li className="w-full h-[12rem] my-2 border rounded-md p-3 shadow-sm flex justify-around items-center">
        <div className="w-[7rem] h-[7rem] bg-gray-200 rounded-full text-center" />
        <div className="w-[12rem] p-2 flex flex-col text-xs justify-between h-full">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="w-[5rem] text-dark">이름</span>
              <span className="w-full text-light">반려동물 이름</span>
            </div>
            <div className="flex flex-col">
              <span className="w-[5rem] text-dark">성별</span>
              <span className="w-full text-light">반려동물 성별</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="w-[5rem] text-dark">생년월일</span>
            <span className="w-full text-light">반려동물 생년월일</span>
          </div>
          <div className="flex flex-col">
            <span className="w-[5rem] text-dark">구분</span>
            <span className="w-full text-light">반려동물 구분</span>
            <span className="w-full text-light">반려동물 세부 구분</span>
          </div>
        </div>
      </li>
      <li className="w-full h-[12rem] my-2 border rounded-md p-3 shadow-sm flex justify-around items-center">
        <div className="w-[7rem] h-[7rem] bg-gray-200 rounded-full text-center" />
        <div className="w-[12rem] p-2 flex flex-col text-xs justify-between h-full">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="w-[5rem] text-dark">이름</span>
              <span className="w-full text-light">반려동물 이름</span>
            </div>
            <div className="flex flex-col">
              <span className="w-[5rem] text-dark">성별</span>
              <span className="w-full text-light">반려동물 성별</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="w-[5rem] text-dark">생년월일</span>
            <span className="w-full text-light">반려동물 생년월일</span>
          </div>
          <div className="flex flex-col">
            <span className="w-[5rem] text-dark">구분</span>
            <span className="w-full text-light">반려동물 구분</span>
            <span className="w-full text-light">반려동물 세부 구분</span>
          </div>
        </div>
      </li>
      <li className="relative w-full h-[12rem] my-2 border-4 rounded-md p-3 shadow-sm flex justify-around items-center cursor-pointer">
        <div className="w-[7rem] h-[7rem] bg-gray-200 rounded-full" />
        <div className="w-[12rem] p-2 flex flex-col text-sm justify-between h-full">
          <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
          <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
          <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
          <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
          <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
          <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
          <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
          <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
        </div>
        <div className="absolute text-lg font-bold text-center opacity-0 w-full h-full align-middle py-20 hover:opacity-20 bg-white">
          새로운 반려동물 추가하기
        </div>
      </li>
    </ul>
  );
};
export default PetPage;
