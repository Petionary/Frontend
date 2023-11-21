import Rate from '../../../../../components/Rate';
import { IPlace } from '../../../../../utils/type';

interface ItemProps {
  place: IPlace;
}

const Item = ({ place }: ItemProps) => {
  return (
    <article className="cursor-pointer shadow-lg w-[25rem] h-[25rem] relative rounded-sm overflow-hidden sm:h-[22.375rem]">
      <div className="relative">
        <img
          className="w-full h-[11.25rem] sm:h-[11.1875rem] bg-[#D9D9D9]"
          src={place.thumbnailSrc}
        />
        <Rate rate={place.rate} list />
      </div>
      <div className="w-full h-[50%] sm:h-[30%] flex flex-col justify-between py-3 px-5 text-sm">
        <div className="flex flex-col justify-between h-[5rem]">
          <div className="flex w-full items-end justify-between mx-auto">
            <span className="text-xl text-gray-100">{place.name}</span>
            <span className="text-xs text-light">구분</span>
          </div>
          <span className="text-xs text-gray-70">{place.address + ' ' + place.detailAddress}</span>
          <span className="text-xs text-gray-70">{place.contact}</span>
        </div>
        <span className="text-xs text-gray-70">0.5km</span>
      </div>
    </article>
  );
};

export default Item;
