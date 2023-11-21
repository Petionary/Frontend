import { ComponentPropsWithoutRef } from 'react';

interface FilterItemProps extends ComponentPropsWithoutRef<'input'> {
  curr_category: string;
}

const FILTER_ITEM: { [key: string]: string } = {
  total: '전체',
  cafe: '카페',
  restaurant: '음식점',
  hotel: '호텔',
  park: '공원',
  beauty: '미용',
  hospital: '병원',
  camping: '캠핑장',
  etc: '기타',
};

const FilterItem = ({ curr_category, ...rest }: FilterItemProps) => {
  const color = curr_category === rest.value ? 'text-gray-100' : 'text-gray-50';
  const border = curr_category === rest.value ? 'border-b-[0.125rem] border-primary' : '';

  return (
    <label>
      <input type="checkbox" name="category" className="sr-only peer" {...rest} />
      <div
        className={`w-[5.5rem] h-[7.5rem] text-center ${border} pt-[2.25rem] pb-[0.62rem] flex flex-col justify-between`}
      >
        <p>😛</p>
        <p className={`text-[1rem] font-[500] leading-[1.625rem] -tracking-[0.005rem] ${color}`}>
          {FILTER_ITEM[rest.value as string]}
        </p>
      </div>
    </label>
  );
};

export default FilterItem;
