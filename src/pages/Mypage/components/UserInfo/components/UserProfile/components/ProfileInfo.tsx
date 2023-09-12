import useInput from '../../../../../../../hooks/useInput';
import { IUser } from '../../../../../../../utils/type';
import AddressInfo from './AddressInfo';
import BasicInfo from './BasicInfo';

interface ProfileInfoProps {
  user: IUser;
  editToggle: boolean;
}

const ProfileInfo = ({ user, editToggle }: ProfileInfoProps) => {
  const { input, handleInputChange, setInput } = useInput({
    nickname: user.nickname,
    contact: user.contact,
    postcode: user.postcode,
    address: user.address,
    detailAddress: user.detailAddress,
  });

  return (
    <form className="w-[36.25rem] h-[23rem] flex flex-col justify-between">
      <BasicInfo
        nickname={input.nickname}
        contact={input.contact}
        onChangeInput={handleInputChange}
        editToggle={editToggle}
      />
      <AddressInfo
        user={input}
        onChangeInput={handleInputChange}
        setInput={setInput}
        editToggle={editToggle}
      />
    </form>
  );
};

export default ProfileInfo;
