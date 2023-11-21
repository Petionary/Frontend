import Button from '../../../Button';

interface RegisterButtonProps {
  step: number;
  nicknameLength: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const RegisterButton = ({
  step,
  nicknameLength,
  onClickNext,
  onClickPrev,
}: RegisterButtonProps) => {
  return (
    <div className="w-full px-[5rem] flex justify-between">
      <Button onClick={onClickPrev} disabled={step === 0}>
        Back
      </Button>
      <Button cta onClick={onClickNext} disabled={step === 0 && nicknameLength === 0}>
        Next
      </Button>
    </div>
  );
};

export default RegisterButton;
