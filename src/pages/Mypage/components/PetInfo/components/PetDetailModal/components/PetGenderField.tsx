import PetInfoRadio from './PetSpeciesRadio';

interface PetGenderFieldProps {
  editToggle: boolean;
}

const PetGenderField = ({ editToggle }: PetGenderFieldProps) => {
  return (
    <fieldset className="flex flex-col">
      <PetInfoRadio type="male" disabled={!editToggle} />
      <PetInfoRadio type="female" disabled={!editToggle} />
    </fieldset>
  );
};

export default PetGenderField;
