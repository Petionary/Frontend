import PlaceChip from './PlaceChip';

interface PlaceListProps {
  userInfo: { nickname: string; places: string[] };
  handleSetPlace: React.Dispatch<React.SetStateAction<{ nickname: string; places: string[] }>>;
}

const PlaceList = ({ userInfo, handleSetPlace }: PlaceListProps) => {
  return (
    <div className="mt-[4.45rem]">
      {userInfo?.places?.map(place => (
        <PlaceChip key={place} text={place} userInfo={userInfo} handleSetPlace={handleSetPlace} />
      ))}
    </div>
  );
};

export default PlaceList;
