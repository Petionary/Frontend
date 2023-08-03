import { ComponentPropsWithRef } from 'react';

interface CategoryItemProps extends ComponentPropsWithRef<'input'> {
  category: string;
}

const CATEGOTIES: { [key: string]: string } = {
  cafe: '카페',
  restaurant: '음식점',
  hospital: '병원',
  park: '공원',
  hotel: '호텔',
  etc: '기타',
};

const CategoryItem = ({ category, ...rest }: CategoryItemProps) => {
  return (
    <label className="relative cursor-pointer w-[3.5rem] h-[2rem] mx-auto my-1 overflow-hidden">
      <input type="checkbox" className="peer sr-only" name="category" readOnly {...rest} />
      <span className="absolute border border-light rounded-2xl h-full w-full text-center p-[.4rem] hover:font-bold peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-checked:font-bold">
        {CATEGOTIES[category]}
      </span>
    </label>
  );
};

export default CategoryItem;
