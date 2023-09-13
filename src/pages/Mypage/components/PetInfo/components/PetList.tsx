import { IPet } from '../../../../../utils/type';
import PetCard from './PetCard';

interface PetList {
  pets: IPet[];
}

const PetList = ({ pets }: PetList) => {
  return (
    <section className="flex justify-between flex-wrap w-[41.875vw] mt-[4.13rem]">
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </section>
  );
};

export default PetList;
