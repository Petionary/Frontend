const Item = () => {
  // 1. article : onClick => () => nav('/place/id')
  // 2. interface place {
  //     장소이름;
  //     구분; 카페 / 레스토랑 / 공원 / 병원 / 호텔 / 미용실 등
  //     주소; 문자열
  //     전화번호; 문자열
  //     거리; 회원 주소 바탕으로 거리 계산 -> 유틸 함수 작성 필요
  // }

  return (
    <article className="cursor-pointer shadow-lg w-[25rem] h-[25rem] relative rounded-sm overflow-hidden sm:w-full sm:h-[22.375rem]">
      <div className="w-full h-[11.25rem] sm:h-[11.1875rem] bg-[#D9D9D9]" />
      <div className="w-full h-[50%] sm:h-[30%] flex flex-col justify-between py-3 px-5 text-sm">
        <div className="flex flex-col justify-between h-[5rem]">
          <div className="flex w-full items-end justify-between mx-auto">
            <span className="text-xl text-gray-100">장소 이름</span>
            <span className="text-xs text-light">구분</span>
          </div>
          <span className="text-xs text-gray-70">서울특별시 양천구 신정동</span>
          <span className="text-xs text-gray-70">02-1234-5678</span>
        </div>
        <span className="text-xs text-gray-70">0.5km</span>
      </div>
    </article>
  );
};

export default Item;
