import { ComponentPropsWithRef } from 'react';

interface SortItemProps extends ComponentPropsWithRef<'input'> {
  sort: string;
}

const SORTS: { [key: string]: string } = {
  review: '리뷰 많은 순',
  heart: '별점 높은 순',
  distance: '거리 순',
};

const SortItem = ({ sort, ...rest }: SortItemProps) => {
  return (
    <label className="relative min-w-[6.5rem] h-[1.5rem] mx-auto my-1 overflow-hidden cursor-auto">
      <input type="checkbox" className="peer sr-only" name="sort" value={sort} readOnly {...rest} />
      <span className="absolute px-2 py-1 cursor-pointer text-center bg-gray-20 min-w-[4.5rem] rounded-[1.25rem] peer-checked:text-white peer-checked:bg-primary peer-checked:cursor-auto">
        {SORTS[sort]}
      </span>
    </label>
  );
};

export default SortItem;
