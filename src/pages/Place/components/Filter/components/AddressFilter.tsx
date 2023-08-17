import { ChangeEvent } from 'react';
import { TPlaceParam } from '../../..';
import SelectAddress from './SelectAddress';
import FilterTitle from './FilterTitle';

interface AddressFilterProps {
  params: TPlaceParam;
  setParams: React.Dispatch<React.SetStateAction<TPlaceParam>>;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const AddressFilter = ({ params, handleParams, setParams }: AddressFilterProps) => {
  const resetAddress = () => setParams({ ...params, region: '', district: '' });

  return (
    <div className="text-xs flex flex-col">
      <FilterTitle filter="Search" resetFilter={resetAddress} />
      <SelectAddress params={params} handleParams={handleParams} />
    </div>
  );
};

export default AddressFilter;
