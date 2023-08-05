import { ChangeEvent } from 'react';
import CategoryItem from './CategoryItem';
import { TPlaceParam } from '../../..';
import FilterTitle from './FilterTitle';

interface CategoryFilterProps {
  params: TPlaceParam;
  setParams: React.Dispatch<React.SetStateAction<TPlaceParam>>;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CATEGORIES = ['cafe', 'restaurant', 'hotel', 'park', 'hospital', 'etc'];

const CategoryFilter = ({ params, setParams, handleParams }: CategoryFilterProps) => {
  const resetCategory = () => {
    setParams({ ...params, category: '' });
  };

  return (
    <div className="text-xs">
      <FilterTitle filter="카테고리" resetFilter={resetCategory} />
      <div className="p-2 my-2 grid grid-cols-4 overflow-hidden">
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
