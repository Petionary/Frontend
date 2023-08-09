import IsOpen from './IsOpen';

const MapPlaceCard = () => {
  return (
    <article className="flex w-[33.75rem] h-[11.25rem] mx-[0.44rem] bg-white rounded-t-[0.25rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]">
      <img alt="image" className="bg-gray-40 w-[13.375rem] h-full" />
      <div className="flex p-[1.25rem] justify-between w-[20.375rem]">
        <div className="flex flex-col">
          <span>장소 이름</span>
          <span>서울시 양천구 신정동</span>
          <span>02-1234-5678</span>
        </div>
        <IsOpen isOpen={true} />
      </div>
    </article>
  );
};

export default MapPlaceCard;
