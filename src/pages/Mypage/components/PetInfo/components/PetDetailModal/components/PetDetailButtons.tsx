import { FormEvent } from 'react';

interface PetDetailButtonsProps {
  handleEditToggle: () => void;
}

const PetDetailButtons = ({ handleEditToggle }: PetDetailButtonsProps) => {
  const handleEditPetInfo = (e: FormEvent) => {
    e.preventDefault();
    handleEditToggle();
  };

  return (
    <section className="text-[#FF9666] text-[0.9375rem] font-400 -tracking-[0.00469rem] mt-[4.06rem] flex justify-end">
      <button className="w-[4.5rem] h-[2.375rem] rounded-[0.25rem] border border-[#FF9666] mr-[0.625rem]">
        분실신고
      </button>
      <button
        className="w-[4.5rem] h-[2.375rem] rounded-[0.25rem] border border-[#FF9666] ml-[0.625rem]"
        onClick={handleEditPetInfo}
      >
        정보수정
      </button>
    </section>
  );
};

export default PetDetailButtons;
