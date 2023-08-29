import { ChangeEvent } from 'react';
import { DISTRICT, REGION } from '../../../../../../../utils/Address';
import Dropdown from '../../../../../../Dropdown';

interface PlaceInputProps {
  input: { region: string; district: string };
  // eslint-disable-next-line no-unused-vars
  onChangePlaceDropDown: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const PlaceDropDown = ({ input, onChangePlaceDropDown }: PlaceInputProps) => {
  return (
    <div className="flex justify-between">
      <Dropdown name="region" value={input?.region} onChange={onChangePlaceDropDown} width="sm">
        <option value="">시∙도</option>
        {REGION?.map(el => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </Dropdown>
      <Dropdown name="district" value={input?.district} onChange={onChangePlaceDropDown}>
        <option value="">시∙군∙구</option>
        {DISTRICT[input?.region]?.map(el => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </Dropdown>
    </div>
  );
};

export default PlaceDropDown;
