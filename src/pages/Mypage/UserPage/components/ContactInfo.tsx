import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import InfoTitle from './InfoTitle';

interface ContactInfoProps {
  editToggle: boolean;
}

const ContactInfo = ({ editToggle }: ContactInfoProps) => {
  return (
    <>
      <InfoTitle type="contact" />
      <div className="my-5 w-full">
        {/* 연락처 contact */}
        <div className="flex justify-between items-center sm:flex-col w-full">
          <div className="w-[45%] md:w-full sm:w-full">
            <Input
              width="full"
              margin="my-1"
              disabled={!editToggle}
              value="email@gmail.com"
              label="이메일"
              type="email"
            />
          </div>
          <div className="w-[45%] md:w-full sm:w-full">
            <Input
              width="full"
              margin="my-2"
              disabled={!editToggle}
              value="010-****-****"
              label="전화번호"
            />
          </div>
        </div>
        {/* 주소 address */}
        {/* 카카오주소 API 사용 */}
        <div>
          <div className="flex justify-between items-end w-[20rem] md:w-full sm:w-full">
            <Input width="sm" label="주소" margin="my-1" disabled value="08053" />
            <Button width="full" margin="my-2 ml-3" rounded={false}>
              검색
            </Button>
          </div>
          <Input
            width="full"
            margin="my-2"
            disabled={!editToggle}
            value="서울시 양천구 신정로 7길"
          />
          <Input width="full" margin="my-2" disabled={!editToggle} value="60-7" />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
