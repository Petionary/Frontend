import { IPet } from '../../../../../utils/type';

interface PetCardProps {
  pet: IPet;
  onClickButton: () => void;
  setPetId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const PetCard = ({ pet, onClickButton, setPetId }: PetCardProps) => {
  const onClickPetDetail = () => {
    onClickButton();
    setPetId(pet.id);
  };
  return (
    <article
      onClick={onClickPetDetail}
      className="w-[14.75rem] h-[21.25rem] my-[1.25rem] bg-white flex flex-col items-center cursor-pointer"
    >
      <img
        src={pet.profile_url}
        alt="pet_image"
        className="w-[10rem] h-[10rem] rounded-full m-[2.38rem]"
      />
      <p>{pet.name}</p>
    </article>
  );
};

export default PetCard;
