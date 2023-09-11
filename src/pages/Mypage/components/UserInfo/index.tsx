import useInput from '../../../../hooks/useInput';
import useToggle from '../../../../hooks/useToggle';
import InfoTitle from '../InfoTitle';
import UserProfile from './components/UserProfile';

const user = {
  email: '',
  name: '',
  gender: '',
  nickName: '',
  birthDate: '',
  phoneNumber: '',
  postcode: '',
  address: '',
  detailAddress: '',
};

export type TUser = typeof user;

const UserInfo = () => {
  const {
    input: userInput,
    handleInputChange: handleUserInputChange,
    setInput: setUserInput,
  } = useInput(user);

  const [editToggle, handleEditToggle] = useToggle();

  const handleSaveEdit = () => {
    handleEditToggle();
  };

  const handleCancelEdit = () => {
    setUserInput(user);
    handleEditToggle();
  };

  const handleDisableAccount = () => {
    handleEditToggle();
  };

  return (
    <section className="px-[5.44rem] py-[2.5rem]">
      <InfoTitle title="My Profile" />
      <UserProfile />
      {/* <BasicInfo
        editToggle={editToggle}
        user={userInput}
        handleUserInputChange={handleUserInputChange}
      />*/}
      <InfoTitle title="My Place" />
      {/*<ContactInfo
        editToggle={editToggle}
        user={userInput}
        handleUserInputChange={handleUserInputChange}
        setUserInput={setUserInput}
      />
      {editToggle ? (
        <EditButton
          handleCancelEdit={handleCancelEdit}
          handleSaveEdit={handleSaveEdit}
          handleDisableAccount={handleDisableAccount}
        />
      ) : (
        <Button onClick={handleEditToggle}>회원정보수정</Button>
      )} */}
    </section>
  );
};

export default UserInfo;
