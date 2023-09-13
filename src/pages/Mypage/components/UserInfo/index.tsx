import Button from '../../../../components/Button';
import useToggle from '../../../../hooks/useToggle';
import { IUser } from '../../../../utils/type';
import InfoTitle from '../InfoTitle';
import UserProfile from './components/UserProfile';

interface UserInfoProps {
  user: IUser;
}

const UserInfo = ({ user }: UserInfoProps) => {
  const [editToggle, handleEditToggle] = useToggle();

  return (
    <section className="relative px-[5.44rem] pt-[3.7vh]">
      <InfoTitle title="My Profile" />
      <UserProfile user={user} editToggle={editToggle} />
      <InfoTitle title="My Place" />
      <div className="absolute bottom-[4.5vh] right-0">
        <Button size="xs" onClick={handleEditToggle}>
          수정
        </Button>
      </div>
    </section>
  );
};

export default UserInfo;
