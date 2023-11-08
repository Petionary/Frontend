import { ChangeEvent } from 'react';
import { IUser } from '../../../../../../../utils/type';
import AddressInfo from './AddressInfo';
import BasicInfo from './BasicInfo';

interface ProfileInfoProps {
  user: IUser;
  editToggle: boolean;
  // eslint-disable-next-line no-unused-vars
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setInput: React.Dispatch<React.SetStateAction<IUser>>;
}

const ProfileInfo = ({ user, editToggle, handleInputChange, setInput }: ProfileInfoProps) => {
  return (
    <form className="w-[36.25rem] h-[23rem] flex flex-col justify-between">
      <BasicInfo
        nickname={user.nickname}
        contact={user.contact}
        onChangeInput={handleInputChange}
        editToggle={editToggle}
      />
      <AddressInfo
        user={user}
        onChangeInput={handleInputChange}
        setInput={setInput}
        editToggle={editToggle}
      />
    </form>
  );
};

export default ProfileInfo;
