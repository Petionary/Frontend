import Button from '../../../components/Button';
import Input from '../../../components/Input';
import useToggle from '../../../hooks/useToggle';
import BasicInfo from './components/BasicInfo';
import ContactInfo from './components/ContactInfo';

const UserPage = () => {
  const [editToggle, handleEditToggle] = useToggle();
  return (
    <div className="sm:w-full w-[50vw] mx-auto flex flex-col items-center">
      <BasicInfo editToggle={editToggle} />
      <ContactInfo editToggle={editToggle} />
      {/* EditButtons */}
      {/* 수정버튼 클릭 -> OAuth 인증 -> 본인확인 완료되면 input disabled = false로 변경 */}
      {/* input 내용 변경 후 수정완료 버튼 클릭 -> http patch 요청 후 input disabled = true로 변경 */}
      <Button onClick={handleEditToggle}>회원정보수정</Button>
    </div>
  );
};

export default UserPage;
