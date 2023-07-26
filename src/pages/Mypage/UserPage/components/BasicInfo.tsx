import Input from '../../../../components/Input';
import InfoTitle from './InfoTitle';

interface BasicInfoProps {
  editToggle: boolean;
}

const BasicInfo = ({ editToggle }: BasicInfoProps) => {
  return (
    <>
      <InfoTitle type="basic" />
      <div className="my-5 flex justify-between md:flex-col sm:flex-col w-full">
        <div className="my-2 w-[10rem] h-[10rem] bg-red rounded-lg sm:mx-auto md:mx-auto">img</div>
        <div className="flex flex-col justify-between md:mx-auto sm:mx-auto w-[15rem] sm:w-full md:w-full">
          <Input width="full" margin="my-2" disabled={!editToggle} value="이름" label="이름" />
          <Input width="full" margin="my-2" disabled={!editToggle} value="별명" label="별명" />
        </div>
        <div className="flex flex-col justify-between md:mx-auto sm:mx-auto w-[15rem] sm:w-full md:w-full">
          <Input
            width="full"
            margin="my-2"
            disabled={!editToggle}
            value="2023-07-26"
            label="생년월일"
            type="date"
          />
          <Input width="full" margin="my-2" disabled value="남성" label="성별" />
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
