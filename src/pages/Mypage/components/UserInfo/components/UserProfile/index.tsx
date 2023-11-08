import { IUser } from '../../../../../../utils/type';
import ProfileImg from '../../../../../../components/ProfileImg';
import ProfileInfo from './components/ProfileInfo';
import useInput from '../../../../../../hooks/useInput';

interface UserProfileProps {
  user: IUser;
  editToggle: boolean;
}

const UserProfile = ({ user, editToggle }: UserProfileProps) => {
  const { input, handleInputChange, setInput } = useInput({
    name: user.name,
    id: user.id,
    gender: user.gender,
    birth_date: user.birth_date,
    profile_url: user.profile_url,
    nickname: user.nickname,
    contact: user.contact,
    postcode: user.postcode,
    address: user.address,
    detailAddress: user.detailAddress,
    pets: user.pets,
  });

  return (
    <section className="flex w-[55rem] justify-between pt-[5.25rem] pb-[3.25rem]">
      <ProfileImg input={input} setInput={setInput} editToggle={editToggle} />
      <ProfileInfo
        user={input}
        editToggle={editToggle}
        handleInputChange={handleInputChange}
        setInput={setInput}
      />
    </section>
  );
};

export default UserProfile;
