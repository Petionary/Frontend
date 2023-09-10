import { ChangeEvent } from 'react';
import Input from '../../../Input/index.tsx';
import PlaceStep from './components/PlaceStep/index.tsx';
import PetStep from './components/PetStep/index.tsx';

interface UserInfoProps {
  step: number;
  // eslint-disable-next-line no-unused-vars
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetPlace: React.Dispatch<React.SetStateAction<{ nickname: string; places: string[] }>>;
  userInfo: { nickname: string; places: string[] };
}

const UserInfo = ({ userInfo, handleInputChange, step, handleSetPlace }: UserInfoProps) => {
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
  if (step === 1) return <PlaceStep userInfo={userInfo} handleSetPlace={handleSetPlace} />;
  if (step === 2) return <PetStep />;
};

export default UserInfo;
