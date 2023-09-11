import ProfileImg from './components/ProfileImg';
import ProfileInfo from './components/ProfileInfo';

const UserProfile = () => {
  return (
    <section className="flex w-[55rem] justify-between pt-[5.25rem] pb-[3.25rem]">
      <ProfileImg />
      <ProfileInfo />
    </section>
  );
};

export default UserProfile;
