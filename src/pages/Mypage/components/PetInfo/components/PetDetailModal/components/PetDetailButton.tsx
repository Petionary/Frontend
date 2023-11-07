import { ComponentPropsWithoutRef } from 'react';

interface PetDetailButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonText: string;
}

const PetDetailButton = ({ buttonText, ...rest }: PetDetailButtonProps) => {
  return (
    <button
      className="w-[4.5rem] h-[2.375rem] rounded-[0.25rem] border border-[#FF9666] mx-[0.625rem]"
      {...rest}
    >
      {buttonText}
    </button>
  );
};

export default PetDetailButton;
