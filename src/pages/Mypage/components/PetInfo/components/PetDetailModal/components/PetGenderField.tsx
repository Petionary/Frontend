import PetInfoRadio from './PetSpeciesRadio';

const PetGenderField = () => {
  return (
    <fieldset className="flex flex-col">
      <PetInfoRadio type="male" />
      <PetInfoRadio type="female" />
    </fieldset>
  );
};

export default PetGenderField;
