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
    <div className="w-[9.625rem] h-[2.75rem] border border-primary text-primary flex justify-between px-[1rem] py-[0.62rem] text-[0.9375rem] rounded-[0.25rem] my-[0.44rem]">
      <span>{text}</span>
      <Cancel onClick={handleDeletePlace} className="fill-primary" />
    </div>
  );
};

export default PlaceChip;
