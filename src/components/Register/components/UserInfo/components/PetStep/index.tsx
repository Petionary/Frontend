import Button from '../../../../../Button';

const PetStep = () => {
  const handleRegisterPet = () => {};

  const handleSkipRegister = () => {};

  return (
    <div className="w-full h-[8.51rem] flex flex-col items-center justify-between">
      <Button size="lg" cta onClick={handleRegisterPet}>
        반려동물 프로필 입력하러 가기
      </Button>
      <Button size="lg" onClick={handleSkipRegister}>
        입력하지 않고 넘어가기
      </Button>
    </div>
  );
};

export default PetStep;
