import { ChangeEvent } from 'react';
import PetSpeciesRadio from './PetSpeciesRadio';

interface PetSpeciesFieldProps {
  editToggle: boolean;
  species: string;
  detailSpecies: string;
  // eslint-disable-next-line no-unused-vars
  onChangeSpecies: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PetSpeciesField = ({
  editToggle,
  species,
  detailSpecies,
  onChangeSpecies,
}: PetSpeciesFieldProps) => {
  return (
    <fieldset className="flex flex-col">
      <PetSpeciesRadio
        name="species"
        detail_species={species === 'dog' ? detailSpecies : ''}
        checked={species === 'dog'}
        type="dog"
        disabled={!editToggle}
        editToggle={editToggle}
        onChange={onChangeSpecies}
      />
      <PetSpeciesRadio
        name="species"
        detail_species={species === 'cat' ? detailSpecies : ''}
        checked={species === 'cat'}
        type="cat"
        disabled={!editToggle}
        editToggle={editToggle}
        onChange={onChangeSpecies}
      />
      <PetSpeciesRadio
        name="species"
        detail_species={species === 'etc' ? detailSpecies : ''}
        checked={species === 'etc'}
        type="etc"
        disabled={!editToggle}
        editToggle={editToggle}
        onChange={onChangeSpecies}
      />
    </fieldset>
  );
};

export default PetSpeciesField;
