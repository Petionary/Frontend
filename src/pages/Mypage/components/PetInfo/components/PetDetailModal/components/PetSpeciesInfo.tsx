import PetSpeciesRadio from './PetSpeciesRadio';

const PetSpeciesField = () => {
  return (
    <fieldset className="flex flex-col">
      <PetSpeciesRadio type="dog" />
      <PetSpeciesRadio type="cat" />
      <PetSpeciesRadio type="etc" />
    </fieldset>
  );
};

export default PetSpeciesField;
