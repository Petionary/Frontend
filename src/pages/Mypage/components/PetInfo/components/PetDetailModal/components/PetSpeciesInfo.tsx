import PetSpeciesRadio from './PetSpeciesRadio';

interface PetSpeciesFieldProps {
  editToggle: boolean;
}

const PetSpeciesField = ({ editToggle }: PetSpeciesFieldProps) => {
  return (
    <fieldset className="flex flex-col">
      <PetSpeciesRadio type="dog" disabled={!editToggle} />
      <PetSpeciesRadio type="cat" disabled={!editToggle} />
      <PetSpeciesRadio type="etc" disabled={!editToggle} />
    </fieldset>
  );
};

export default PetSpeciesField;
