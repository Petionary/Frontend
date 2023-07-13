import { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  width?: 'sm' | 'md' | 'lg' | 'full'; // default = 'md'
  position?: 'relative' | 'fixed' | 'absolute'; // default = 'relative'
  rounded?: boolean; // default = false
  margin?: string; // default = 'm-0'
  guideLine?: string;
  bold?: boolean;
  inputValidation?: boolean;
  required?: boolean;
}

const INPUT_SIZE = {
  sm: 'w-[10rem]',
  md: 'w-[20rem]',
  lg: 'w-[25rem]',
  full: '',
};

const Input = ({
  label,
  width = 'md',
  margin = 'm-0',
  position = 'relative',
  guideLine = '가이드라인',
  rounded = false,
  bold = false,
  inputValidation = true,
  required = true,
  ...rest
}: InputProps) => {
  const isBold = bold ? 'font-bold' : '';
  const isRounded = rounded ? 'rounded-full' : 'rounded-md';
  const isInvalid = !inputValidation ? 'outline-red' : '';

  return (
    <label className={`flex flex-col text-sm ${margin} ${position} `}>
      {label && (
        <div className={`text-text px-1 ${isBold}`}>
          {label} {required && <span className="text-red">*</span>}
        </div>
      )}
      <input
        className={`input ${isRounded} ${INPUT_SIZE[width]} ${isInvalid}`}
        placeholder={rest.placeholder ? rest.placeholder : '내용을 입력해주세요.'}
      />
      {guideLine && (
        <p className={`text-xs px-1 ${!inputValidation ? 'text-red-light' : 'text-light'}`}>
          {guideLine}
        </p>
      )}
    </label>
  );
};

export default Input;
