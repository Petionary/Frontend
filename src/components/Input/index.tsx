import { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string | undefined;
  isValid?: boolean | undefined;
  width?: 'sm' | 'md' | 'lg';
  guide?: string | undefined;
}

const WIDTH = {
  sm: 'w-[15rem]',
  md: 'w-[21.375rem]',
  lg: 'w-[36.25rem]',
};

//

const Input = ({ label, isValid, guide, width = 'md', ...rest }: InputProps) => {
  const height = label ? 'h-[2.75rem]' : 'h-[3.75rem]';
  const color =
    isValid === undefined
      ? 'border-gray-40'
      : isValid
      ? 'text-primary border-primary'
      : 'text-red border-red';

  return (
    <label>
      {label && <p className="text-[0.9375rem] text-gray-90">{label}</p>}
      <input
        className={`border-b-2 font-[400] px-[0.75rem] outline-none placeholder::text-[1.125rem] disabled:text-gray-40 distabled:border-gray-40 bg-inherit ${height} ${WIDTH[width]} ${color}`}
        {...rest}
      />
      {!isValid && (
        <p className="px-[0.75rem] text-[0.75rem] text-gray-50 h-[1.4375rem] leading-[1.5rem]">
          {guide}
        </p>
      )}
    </label>
  );
};

export default Input;
