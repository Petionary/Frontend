import useToggle from '../../../../hooks/useToggle';
import AddPet from './components/AddPet';
import AddPetModal from './components/AddPetModal';
import Pet from './components/Pet';

export const mock = {
  name: '반려동물 이름',
  gender: '반려동물 성별',
  birthDate: '반려동물 생년월일',
  species: '반려동물 구분',
  detailSpecies: '반려동물 상세구분',
};

const PetPage = () => {
  const [addPetToggle, handleAddPetToggle] = useToggle(false);
  return (
    <>
      <ul className="w-full grid grid-cols-2 gap-x-5 md:grid-cols-1 sm:grid-cols-1">
        <Pet pet={mock} />
        <AddPet onClick={handleAddPetToggle} />
      </ul>
      {addPetToggle && <AddPetModal />}
    </>
  );
};
export default PetPage;
