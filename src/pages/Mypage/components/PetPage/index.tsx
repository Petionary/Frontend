import Button from '../../../../components/Button';
import useToggle from '../../../../hooks/useToggle';
import AddPet from './components/AddPet';
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
      {addPetToggle && (
        <dialog
          className="absolute w-full h-full py-3 px-10 sm:w-full mx-auto flex flex-col items-center border rounded-md shadow-md"
          open
        >
          <Button width="sm" onClick={handleAddPetToggle}>
            X
          </Button>
          <div className="w-[10rem] h-[10rem] border">프로필 이미지</div>
        </dialog>
      )}
    </>
  );
};
export default PetPage;
