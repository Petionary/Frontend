import { IPet } from '../../../../../utils/type';
import AddPetButton from './AddPetButton';
import PetCard from './PetCard';

interface PetList {
  pets: IPet[];
  handleDetailToggle: () => void;
  setPetId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const PetList = ({ pets, handleDetailToggle, setPetId }: PetList) => {
  return (
    <section className="flex flex-wrap justify-between w-[41.875vw] mt-[4.13rem]">
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} onClickButton={handleDetailToggle} setPetId={setPetId} />
      ))}
      <AddPetButton onClickButton={handleDetailToggle} />
    </section>
  );
};

export default PetList;
