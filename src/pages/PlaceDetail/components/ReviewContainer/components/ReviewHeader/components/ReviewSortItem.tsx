import { ComponentPropsWithoutRef } from 'react';

interface ReviewSortItemProps extends ComponentPropsWithoutRef<'input'> {
  rate_order?: 'desc' | 'asc';
}

const ReviewSortItem = ({ rate_order, ...rest }: ReviewSortItemProps) => {
  const SORT: { [key: string]: string } = {
    date: '최근 작성순',
    rate: rate_order === 'desc' ? '평점 높은순' : '평점 낮은순',
  };

  const isChecked = rest.checked
    ? 'text-primary border-primary'
    : 'border-white text-gray-100 hover:text-primary hover:border-primary';

  return (
    <label className="mx-[0.75rem] cursor-pointer">
      <input type="checkbox" className="sr-only peer" {...rest} />
      <p
        className={`${isChecked} py-[0.625rem] px-[1rem] border rounded-[0.25rem] text-[0.9375rem] font-[400] -tracking-[0.00469rem]`}
      >
        {SORT[rest.value as string]}
      </p>
    </label>
  );
};

export default ReviewSortItem;
