import { ChangeEvent } from 'react';
import { TUser } from '..';
import Input from '../../../../components/Input';
import InfoTitle from './InfoTitle';

interface BasicInfoProps {
  editToggle: boolean;
  user: TUser;
  // eslint-disable-next-line no-unused-vars
  handleUserInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const BasicInfo = ({ editToggle, user, handleUserInputChange }: BasicInfoProps) => {
  return (
    <>
      <InfoTitle type="basic" />
      <div className="my-5 flex justify-between md:flex-col sm:flex-col w-full">
        <img className="my-2 w-[10rem] h-[10rem] sm:mx-auto md:mx-auto" alt="프로필이미지" />
        <div className="flex flex-col justify-between md:mx-auto sm:mx-auto w-[15rem] sm:w-full md:w-full">
          <Input
            width="full"
            margin="my-1"
            disabled
            value={user.name}
            label="이름"
            name="name"
            onChange={handleUserInputChange}
          />
          <Input
            width="full"
            margin="my-1"
            disabled={!editToggle}
            value={user.nickName}
            label="별명"
            name="nickName"
            onChange={handleUserInputChange}
          />
        </div>
        <div className="flex flex-col justify-between md:mx-auto sm:mx-auto w-[15rem] sm:w-full md:w-full">
          <Input
            width="full"
            margin="my-1"
            disabled
            value={user.birthDate}
            label="생년월일"
            type="date"
            name="birthDate"
            onChange={handleUserInputChange}
          />
          <Input width="full" margin="my-1" disabled value={user.gender} label="성별" />
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
