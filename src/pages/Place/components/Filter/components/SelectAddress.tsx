import { ChangeEvent } from 'react';
import { TPlaceParam } from '../../..';
import { DISTRICT, REGION } from '../../../../../utils/Address';
import Dropdown from '../../../../../components/Dropdown';

interface SelectAddressProps {
  params: TPlaceParam;
  // eslint-disable-next-line no-unused-vars
  handleParams: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectAddress = ({ params, handleParams }: SelectAddressProps) => {
  return (
    <div className="flex m-2">
      <Dropdown name="region" value={params.region} onChange={handleParams}>
        <option value="">시도</option>
        {REGION.map((region: string) => {
          return (
            <option key={region} value={region}>
              {region}
            </option>
          );
        })}
      </Dropdown>
      <Dropdown name="district" value={params.district} onChange={handleParams}>
        <option value="">시군구</option>
        {DISTRICT[params?.region]?.map((district: string) => {
          return (
            <option key={district} value={district}>
              {district}
            </option>
          );
        })}
      </Dropdown>
    </div>
  );
};

export default SelectAddress;
