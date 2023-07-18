import { ChangeEvent, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { TPlaceParam } from '../../..';

interface Props {
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CATEGORIES = ['cafe', 'restaurant', 'hotel', 'park', 'hospital', 'etc'];

const CategoryFilter = ({ params, handleParams }: Props) => {
  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <div className="h-[20%]">
      <span className="text-xs text-text">카테고리</span>
      <div className="text-xs h-full text-light text-center flex items-center p-2 flex-wrap">
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
