import { useEffect } from 'react';
import useInput from '../../../../../../hooks/useInput';
import PlaceInput from './components/PlaceInput';
import PlaceList from './components/PlaceList';

interface PlaceInfoProps {
  userInfo: { nickname: string; places: string[] };
  handleSetPlace: React.Dispatch<React.SetStateAction<{ nickname: string; places: string[] }>>;
}

const PlaceInfo = ({ userInfo, handleSetPlace }: PlaceInfoProps) => {
  const { input, handleInputChange, setInput } = useInput({ region: '', district: '' });

  useEffect(() => {
    setInput({ ...input, district: '' });
  }, [input.region]);

  useEffect(() => {
    if (input.district?.length > 0) {
      const newPlace =
        input.region === '세종특별자치시' ? input.region : `${input.region} ${input.district}`;
      handleSetPlace({ ...userInfo, places: [...userInfo.places, newPlace] });
    }
  }, [input.district]);

  return (
    <div className="w-full h-[26.375rem] pl-[3.63rem] pr-[3.06rem]">
      <PlaceInput input={input} handleInputChange={handleInputChange} />
      <PlaceList userInfo={userInfo} handleSetPlace={handleSetPlace} />
    </div>
  );
};

export default PlaceInfo;
