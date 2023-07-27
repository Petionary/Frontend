import Button from '../../../components/Button';
import useInput from '../../../hooks/useInput';
import useToggle from '../../../hooks/useToggle';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';
import EditButton from './components/EditButton';

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

const UserPage = () => {
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
    <div className="sm:w-full w-[50vw] mx-auto flex flex-col items-center">
      <BasicInfo
        editToggle={editToggle}
        user={userInput}
        handleUserInputChange={handleUserInputChange}
      />
      <ContactInfo
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
      )}
    </div>
  );
};

export default UserPage;
