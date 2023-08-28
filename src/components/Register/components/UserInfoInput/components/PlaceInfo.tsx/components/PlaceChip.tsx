import { ReactComponent as Cancel } from '../../../../../../../assets/cancel.svg';

interface PlaceChipProps {
  text: string;
  userInfo: { nickname: string; places: string[] };
  handleSetPlace: React.Dispatch<React.SetStateAction<{ nickname: string; places: string[] }>>;
}

const PlaceChip = ({ text, userInfo, handleSetPlace }: PlaceChipProps) => {
  const handleDeletePlace = () => {
    const newPlaces = userInfo?.places?.filter(place => place !== text);
    handleSetPlace({ ...userInfo, places: newPlaces });
  };
  return (
    <div className="w-[9.625rem] h-[2.75rem] bg-primary text-white flex justify-between px-[1rem] py-[0.62rem] text-[0.9375rem] rounded-[1.25rem]">
      <span>{text}</span>
      <Cancel onClick={handleDeletePlace} />
    </div>
  );
};

export default PlaceChip;
