import { ReactComponent as AddButton } from '../../../../../assets/icon_plus.svg';

interface AddPetButtonProps {
  onClickButton: () => void;
}

const AddPetButton = ({ onClickButton }: AddPetButtonProps) => {
  return (
    <button
      onClick={onClickButton}
      className="relative w-[14.75rem] h-[21.25rem] my-[1.25rem] bg-white flex flex-col items-center justify-center cursor-pointer rounded-[0.25rem] overflow-hidden"
    >
      <span className="w-[14.75rem] h-[21.25rem] absolute bg-gray-90 opacity-40 top-0 flex flex-col items-center justify-center" />
      <AddButton />
      <span className="text-primary">새 반려동물 등록</span>
    </button>
  );
};

export default AddPetButton;
