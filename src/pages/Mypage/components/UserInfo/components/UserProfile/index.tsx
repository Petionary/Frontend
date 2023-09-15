import { IUser } from '../../../../../../utils/type';
import ProfileImg from '../../../../../../components/ProfileImg';
import ProfileInfo from './components/ProfileInfo';

interface UserProfileProps {
  user: IUser;
  editToggle: boolean;
}

const UserProfile = ({ user, editToggle }: UserProfileProps) => {
  return (
    <section className="flex w-[55rem] justify-between pt-[5.25rem] pb-[3.25rem]">
      <ProfileImg imgSrc={user.profile_url} editToggle={editToggle} />
      <ProfileInfo user={user} editToggle={editToggle} />
    </section>
  );
};

export default UserProfile;
