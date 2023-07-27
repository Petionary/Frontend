import { useEffect } from 'react';
import Button from '../../../components/Button';
import useInput from '../../../hooks/useInput';
import useToggle from '../../../hooks/useToggle';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';

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

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  const handleCancelEdit = () => {
    setUserInput(user);
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
      {/* EditButtons */}
      {/* 수정버튼 클릭 -> OAuth 인증 -> 본인확인 완료되면 input disabled = false로 변경 */}
      {/* input 내용 변경 후 수정완료 버튼 클릭 -> http patch 요청 후 input disabled = true로 변경 */}
      {editToggle ? (
        <section className="flex items-center w-[30rem] justify-between">
          <Button onClick={handleEditToggle}>저장</Button>
          <Button onClick={handleCancelEdit}>취소</Button>
          <div className="text-xs text-light text-center hover:font-bold cursor-pointer">
            회원탈퇴
          </div>
        </section>
      ) : (
        <Button onClick={handleEditToggle}>회원정보수정</Button>
      )}
    </div>
  );
};

export default UserPage;
