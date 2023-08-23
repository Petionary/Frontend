import Input from '../Input';
import useInput from '../../hooks/useInput';
import Button from '../Button';

const Register = () => {
  const { input, handleInputChange } = useInput({ nickname: '' });

  return (
    <dialog open className="w-[50.8125rem] h-[46.875rem] p-0 flex overflow-hidden top-[10.31rem]">
      {/* 배경 이미지 */}
      <section className="flex w-[25.8125rem] h-full overflow-hidden">
        <img
          src="src/assets/bg-image.jpeg"
          alt="background image"
          className="absolute w-[60.1875rem] h-[46.9rem]"
        />
        {/* process */}
      </section>
      {/* 1. 별명 입력 -> 2. 장소 추가 -> 3. 반려동물 프로필 등록 */}
      {/* 별명 입력 */}
      <section className="flex flex-col justify-between items-center w-[25rem] h-full z-10 bg-white pt-[3.75rem] pb-[2.62rem]">
        <div>
          <h1 className="text-[1.25rem] text-gray-100 font-[600]">
            반가워요! 어떻게 불러 드리면 될까요?
          </h1>
          <p className="text-[0.75rem] text-gray-50">마이페이지에서 언제든지 수정 가능해요.</p>
        </div>
        <form>
          <Input
            label="닉네임"
            width="sm"
            name="nickname"
            value={input.nickname}
            onChange={handleInputChange}
            isValid={input.nickname?.length > 0}
          />
        </form>
        <div className="w-full px-[5rem] flex justify-between">
          <Button disabled>Back</Button>
          <Button cta>Next</Button>
        </div>
      </section>
    </dialog>
  );
};

export default Register;
