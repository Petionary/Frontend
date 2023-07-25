import Button from '../../../components/Button';
import Input from '../../../components/Input';

const UserPage = () => {
  return (
    <div className="sm:w-full w-[50vw] mx-auto flex flex-col">
      <span className="text-md text-dark">✦ 기본정보</span>
      <div className="my-5">
        <div className="flex justify-between">
          <Input width="md" margin="my-2" disabled value="추승연" label="이름" />
          <Input width="md" margin="my-2" disabled value="남성" label="성별" />
        </div>
        <Input
          width="full"
          margin="my-2"
          disabled
          value="1992-08-27"
          label="생년월일"
          type="date"
        />
      </div>
      <span className="text-md text-dark">✦ 연락처정보</span>
      <div className="my-5">
        <Input
          width="full"
          margin="my-1"
          disabled
          value="cos4338@gmail.com"
          label="이메일"
          type="email"
        />
        <Input width="full" margin="my-2" disabled value="010-****-4338" label="전화번호" />
        <Input width="full" margin="my-2" disabled value="서울시 양천구 신정로 7길" label="주소" />
        <Input width="full" margin="my-2" disabled value="60-7" />
      </div>

      <div className="flex justify-between w-[25rem] mx-auto">
        <Button>회원정보수정</Button>
        <Button>회원탈퇴</Button>
      </div>
    </div>
  );
};

export default UserPage;
