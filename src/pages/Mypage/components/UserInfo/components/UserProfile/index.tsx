import useToggle from '../../../../../../hooks/useToggle';
import { IUser } from '../../../../../../utils/type';
import ProfileImg from './components/ProfileImg';
import ProfileInfo from './components/ProfileInfo';

interface UserProfileProps {
  editToggle: boolean;
}

const mock: IUser = {
  id: 1,
  name: '홍길동',
  gender: '남',
  profile_url:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzuaQeHjSTieB11OnFn36uNsO0zNCKxM3Euo6fR9eKQ&s',
  birth_date: '1990-01-01',
  nickname: '홍길동',
  contact: '010-1234-5678',
  postcode: '12345',
  address: '서울시 양천구 신정동',
  detailAddress: '1-1',
};

const UserProfile = ({ editToggle }: UserProfileProps) => {
  return (
    <section className="flex w-[55rem] justify-between pt-[5.25rem] pb-[3.25rem]">
      <ProfileImg imgSrc={mock.profile_url} editToggle={editToggle} />
      <ProfileInfo user={mock} editToggle={editToggle} />
    </section>
  );
};

export default UserProfile;
