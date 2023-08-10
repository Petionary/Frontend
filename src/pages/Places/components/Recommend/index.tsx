import Item from '../PlaceList/components/Item';

const Recommend = () => {
  return (
    <section className="relative w-full z-5 sm:hidden">
      <section className="flex flex-col w-full h-[24.125rem] pt-[7.5rem] px-[20rem] bg-white">
        <div className="flex flex-col">
          <span className="text-[2.625rem] text-gray-90">BEST PLACE</span>
          <span className="text-[1.25rem] text-gray-50">
            당신과 당신의 반려동물이 좋아할 만한 곳으로 선정했어요.
          </span>
        </div>
      </section>
      <section className="h-[26.25rem] w-full bg-[#F8F8FA]" />
      <div className="top-[17.62rem] absolute z-10 left-[19.375rem] flex w-[81.25rem] pb-[7.75rem] justify-between border-b-[0.0625rem] border-gray-40">
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Recommend;
