import { ComponentPropsWithRef } from 'react';

interface SortItemProps extends ComponentPropsWithRef<'input'> {
  sort: string;
}

const SORTS: { [key: string]: string } = {
  review: '리뷰',
  heart: '좋아요',
  distance: '거리',
};

const SortItem = ({ sort, ...rest }: SortItemProps) => {
  return (
    <label className="relative w-[3rem] h-[1rem] mx-auto my-1 overflow-hidden cursor-auto">
      <input type="checkbox" className="peer sr-only" name="sort" value={sort} readOnly {...rest} />
      <span className="absolute px-2 cursor-pointer hover:text-dark peer-checked:text-dark peer-checked:font-bold peer-checked:cursor-auto">
        {SORTS[sort]}
      </span>
    </label>
  );
};

export default SortItem;
