import { ChangeEvent } from 'react';
import CategoryItem from './CategoryItem';
import { TPlaceParam } from '../../..';

interface Props {
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CATEGORIES = ['cafe', 'restaurant', 'hotel', 'park', 'hospital', 'etc'];

const CategoryFilter = ({ params, handleParams }: Props) => {
  return (
    <div className="text-xs">
      <div className="flex justify-between px-2">
        <span className="text-text">카테고리</span>
        <span className="text-light cursor-pointer hover:font-bold">초기화</span>
      </div>
      <div className="p-2 my-2 grid grid-cols-5 overflow-hidden">
        {CATEGORIES.map(category => (
          <CategoryItem
            key={category}
            category={category}
            value={category}
            checked={params.category === category}
            onChange={handleParams}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
