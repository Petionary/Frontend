import { ChangeEvent } from 'react';
import Input from '../../../Input';
import PlaceInfo from './components/PlaceInfo.tsx';

interface UserInfoInputProps {
  step: number;
  // eslint-disable-next-line no-unused-vars
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetPlace: React.Dispatch<React.SetStateAction<{ nickname: string; places: string[] }>>;
  userInfo: { nickname: string; places: string[] };
}

const UserInfoInput = ({
  userInfo,
  handleInputChange,
  step,
  handleSetPlace,
}: UserInfoInputProps) => {
  if (step === 0)
    return (
      <Input
        label="닉네임"
        width="sm"
        name="nickname"
        value={userInfo?.nickname}
        onChange={handleInputChange}
        isValid={userInfo?.nickname?.length > 0}
      />
    );
  else if (step === 1) return <PlaceInfo userInfo={userInfo} handleSetPlace={handleSetPlace} />;
};

export default UserInfoInput;
