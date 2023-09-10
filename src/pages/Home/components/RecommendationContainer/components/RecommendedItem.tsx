import { IPlace } from '../../../../../utils/type';

interface RecommendedItem {
  place: IPlace;
}

const RecommendedItem = ({ place }: RecommendedItem) => {
  return (
    <article className="relative w-[25.5rem] h-[15rem] bg-[#D9D9D9] rounded-[0.25rem] overflow-hidden">
      <img src={place.thumbnailSrc} alt={`${place.name} thumbnail`} className="w-full h-full" />
      <div className="flex flex-col absolute left-[1.37rem] bottom-[1.06rem] z-10">
        <span className="text-[1.25rem] text-gray-100 font-[600] leading-[2rem] -tracking-[0.00625rem]">
          {place.name}
        </span>
        <span>{place.rate ? place.rate : place.address + place.detailAddress}</span>
      </div>
    </article>
  );
};

export default RecommendedItem;
