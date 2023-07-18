import { ChangeEvent, ComponentPropsWithRef } from 'react';

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
    <label>
      <input type="checkbox" className="peer sr-only" name="category" readOnly {...rest} />
      <span className="w-[3.5rem] rounded-xl cursor-pointer hover:font-bold border border-light py-2 px-3 peer-checked:border-secondary peer-checked:bg-secondary peer-checked:text-white peer-checked:font-bold">
        {CATEGOTIES[category]}
      </span>
    </label>
  );
};

export default CategoryItem;
