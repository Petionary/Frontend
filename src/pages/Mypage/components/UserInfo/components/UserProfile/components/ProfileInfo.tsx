import Input from '../../../../../../../components/Input';

const ProfileInfo = () => {
  return (
    <form className="w-[36.25rem] h-[23rem] flex flex-col justify-between">
      <div className="flex w-full justify-between">
        <Input width="sm" label="별명" value="" placeholder="별명" />
        <Input width="sm" label="전화번호" value="" placeholder="전화번호" />
      </div>
      <div className="h-[15rem] flex flex-col justify-between">
        <Input label="주소" value="" width="sm" placeholder="우편번호" />
        <Input value="" width="lg" placeholder="주소" />
        <Input value="" width="lg" placeholder="상세주소" />
      </div>
    </form>
  );
};

export default ProfileInfo;
