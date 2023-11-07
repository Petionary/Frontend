import { useEffect } from 'react';
import useInput from '../../../../../../../hooks/useInput';
import useToggle from '../../../../../../../hooks/useToggle';
import { IPet } from '../../../../../../../utils/type';
import PetBasicInfo from './PetBasicInfo';
import PetDetailButtons from './PetDetailButtons';
import PetGenderField from './PetGenderField';
import PetSpeciesField from './PetSpeciesInfo';

interface PetDetailFormProps {
  pet?: IPet;
  handleDetailToggle: () => void;
}

const PetDetailForm = ({ pet, handleDetailToggle }: PetDetailFormProps) => {
  const initialPetInput = {
    id: pet?.id,
    name: pet?.name || '',
    species: pet?.species || '',
    detail_species: pet?.detail_species || '',
    birth_date: pet?.birth_date || '',
    gender: pet?.gender,
    about: pet?.about || '',
    imageSrc: pet?.imageSrc || '',
  };

  const {
    input: petInput,
    handleInputChange: handlePetInputChange,
    setInput: setPetInput,
  } = useInput<IPet>(initialPetInput);

  useEffect(() => {
    if (petInput.species !== pet?.species) setPetInput({ ...petInput, detail_species: '' });
  }, [petInput.species]);

  const [editToggle, handleEditToggle] = useToggle(pet === undefined);

  return (
    <form className="w-[33.4375rem]">
      <PetBasicInfo
        editToggle={editToggle}
        name={petInput.name}
        birthDate={petInput.birth_date}
        onChangeInput={handlePetInputChange}
      />
      <section className="flex justify-between w-[26.81rem] my-[5rem]">
        <PetGenderField
          editToggle={editToggle}
          gender={petInput.gender}
          onChangeGender={handlePetInputChange}
        />
        <PetSpeciesField
          editToggle={editToggle}
          species={petInput.species}
          detailSpecies={petInput.detail_species}
          onChangeSpecies={handlePetInputChange}
        />
      </section>
      <label className="text-[0.9375rem] font-[400] -tracking-[0.00469rem] text-gray-90">
        <span>상세정보</span>
        <textarea
          name="about"
          value={petInput.about}
          placeholder="상세 정보는 소중한 내 반려동물을 찾을 확률을 높일 수 있어요."
          className="w-[33.4375rem] h-[11.875rem] resize-none border p-[0.75rem] mt-[1.25rem] placeholder:text-[#666]"
          disabled={!editToggle}
          onChange={handlePetInputChange}
        />
      </label>
      <PetDetailButtons
        handleEditToggle={handleEditToggle}
        editToggle={editToggle}
        handleDetailToggle={handleDetailToggle}
        initialInput={initialPetInput}
        petInput={petInput}
        setInput={setPetInput}
      />
    </form>
  );
};

export default PetDetailForm;
