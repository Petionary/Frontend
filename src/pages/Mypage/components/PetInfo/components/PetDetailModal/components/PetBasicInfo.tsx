import { ChangeEvent } from 'react';
import Input from '../../../../../../../components/Input';

interface PetBasicInfoProps {
  editToggle: boolean;
  name: string;
  birthDate: string;
  // eslint-disable-next-line no-unused-vars
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PetBasicInfo = ({ editToggle, name, birthDate, onChangeInput }: PetBasicInfoProps) => {
  return (
    <fieldset className="flex w-[26.81rem] justify-between">
      <Input
        label="이름"
        name="name"
        value={name}
        width="xs"
        disabled={!editToggle}
        onChange={onChangeInput}
      />
      <Input
        type="date"
        label="생년월일"
        name="birth_date"
        value={birthDate}
        width="sm"
        disabled={!editToggle}
        onChange={onChangeInput}
      />
    </fieldset>
  );
};

export default PetBasicInfo;
