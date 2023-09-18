import { ChangeEvent } from 'react';
import FilterItem from './FilterItem';

interface FilterListProps {
  curr_category: string;
  // eslint-disable-next-line no-unused-vars
  onChangeFilterItem: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterList = ({ onChangeFilterItem, curr_category }: FilterListProps) => {
  return (
    <section className="w-full h-[7.5rem] flex">
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="total" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="cafe" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="restaurant" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="hotel" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="park" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="beauty" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="hospital" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="camping" />
      <FilterItem curr_category={curr_category} onChange={onChangeFilterItem} value="etc" />
    </section>
  );
};

export default FilterList;
