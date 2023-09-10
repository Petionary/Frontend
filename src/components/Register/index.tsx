import useInput from '../../hooks/useInput';
import { useState } from 'react';
import Title from './components/Title';
import UserInfo from './components/UserInfo';
import RegisterButton from './components/RegisterButton';

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
    <>
      <div className="absolute top-0 bg-gray-90 w-full h-[150vh] opacity-40 z-30" />
      <dialog
        open
        className="w-[50.8125rem] h-[46.875rem] p-0 flex overflow-hidden bg-transparent z-30"
      >
        {/* 배경 이미지 */}
        <section className="flex w-[25.8125rem] h-full overflow-hidden">
          <img src="src/assets/bg-register.png" alt="background image" />
          {/* process */}
        </section>
        {/* 1. 별명 입력 -> 2. 장소 추가 -> 3. 반려동물 프로필 등록 */}
        {/* 별명 입력 */}
        <section
          className={`${
            step < 2 ? 'pb-[2.62rem]' : 'pb-[19.31rem]'
          } flex flex-col justify-between items-center w-[25rem] h-full z-10 bg-white pt-[3.75rem] shadow-md`}
        >
          <Title step={step} />
          <UserInfo
            step={step}
            userInfo={input}
            handleInputChange={handleInputChange}
            handleSetPlace={setInput}
          />
          {step < 2 && (
            <RegisterButton
              step={step}
              onClickNext={handleNextStep}
              onClickPrev={handlePrevStep}
              nicknameLength={input?.nickname?.length}
            />
          )}
        </section>
      </dialog>
    </>
  );
};

export default Register;
