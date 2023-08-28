import useInput from '../../hooks/useInput';
import Button from '../Button';
import { useState } from 'react';
import UserInfoTitle from './components/UserInfoTitle';
import UserInfoInput from './components/UserInfoInput';

interface UserInfo {
  nickname: string;
  places: string[];
}

const Register = () => {
  const { input, handleInputChange, setInput } = useInput<UserInfo>({ nickname: '', places: [] });
  const [step, setStep] = useState(0);

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <dialog
      open
      className="w-[50.8125rem] h-[46.875rem] p-0 flex overflow-hidden top-[10.31rem] border"
    >
      {/* 배경 이미지 */}
      <section className="flex w-[25.8125rem] h-full overflow-hidden">
        <img src="" alt="background image" className="absolute w-[60.1875rem] h-[46.9rem] bg-red" />
        {/* process */}
      </section>
      {/* 1. 별명 입력 -> 2. 장소 추가 -> 3. 반려동물 프로필 등록 */}
      {/* 별명 입력 */}
      <section className="flex flex-col justify-between items-center w-[25rem] h-full z-10 bg-white pt-[3.75rem] pb-[2.62rem]">
        <UserInfoTitle step={step} />
        <UserInfoInput
          step={step}
          userInfo={input}
          handleInputChange={handleInputChange}
          handleSetPlace={setInput}
        />
        <div className="w-full px-[5rem] flex justify-between">
          <Button onClick={handlePrevStep} disabled={step === 0}>
            Back
          </Button>
          <Button
            cta
            onClick={handleNextStep}
            disabled={step === 0 && input?.nickname?.length === 0}
          >
            Next
          </Button>
        </div>
      </section>
    </dialog>
  );
};

export default Register;
