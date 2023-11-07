import { ChangeEvent } from 'react';
import PetInfoRadio from './PetSpeciesRadio';

interface PetGenderFieldProps {
  editToggle: boolean;
  gender?: string;
  // eslint-disable-next-line no-unused-vars
  onChangeGender: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PetGenderField = ({ editToggle, gender, onChangeGender }: PetGenderFieldProps) => {
  return (
    <fieldset className="flex flex-col">
      <PetInfoRadio
        name="gender"
        type="male"
        disabled={!editToggle}
        onChange={onChangeGender}
        checked={gender === 'male'}
      />
      <PetInfoRadio
        name="gender"
        type="female"
        disabled={!editToggle}
        onChange={onChangeGender}
        checked={gender === 'female'}
      />
    </fieldset>
  );
};

export default PetGenderField;
