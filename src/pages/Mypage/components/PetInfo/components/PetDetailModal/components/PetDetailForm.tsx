import PetBasicInfo from './PetBasicInfo';
import PetDetailButtons from './PetDetailButtons';
import PetGenderField from './PetGenderField';
import PetSpeciesField from './PetSpeciesInfo';

const PetDetailForm = () => {
  return (
    <form className="w-[33.4375rem]">
      <PetBasicInfo />
      <section className="flex justify-between w-[26.81rem] my-[5rem]">
        <PetGenderField />
        <PetSpeciesField />
      </section>
      <label className="text-[0.9375rem] font-[400] -tracking-[0.00469rem] text-gray-90">
        <span>상세정보</span>
        <textarea
          placeholder="상세 정보는 소중한 내 반려동물을 찾을 확률을 높일 수 있어요."
          className="w-[33.4375rem] h-[11.875rem] resize-none border p-[0.75rem] mt-[1.25rem] placeholder:text-[#666]"
        />
      </label>
      <PetDetailButtons />
    </form>
  );
};

export default PetDetailForm;
