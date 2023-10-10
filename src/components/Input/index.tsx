import { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  value: string;
  label?: string | undefined;
  isValid?: boolean | undefined;
  width?: 'sm' | 'md' | 'lg';
  guide?: string | undefined;
  required?: boolean;
}

const WIDTH = {
  sm: 'w-[15rem]',
  md: 'w-[21.375rem]',
  lg: 'w-[36.25rem]',
};

//

const Input = ({
  label,
  isValid,
  guide,
  width = 'md',
  value,
  required = false,
  ...rest
}: InputProps) => {
  const color =
    !required || value?.length === 0
      ? 'border-gray-40'
      : isValid
      ? 'text-primary border-primary'
      : 'text-red border-red';

  if (!label)
    return (
      <input
        value={value}
        className={`border-b-2 font-[400] px-[0.75rem] outline-none placeholder::text-[1.125rem] disabled:text-gray-40 distabled:border-gray-40 bg-inherit h-[3.75rem] ${WIDTH[width]} ${color}`}
        {...rest}
      />
    );
  {
    !isValid && value.length > 0 && guide && (
      <p className="px-[0.75rem] text-[0.75rem] text-gray-50 h-[1.4375rem] leading-[1.5rem]">
        {guide}
      </p>
    );
  }

  return (
    <label className="h-[4.505rem] flex flex-col justify-between pt-[0.13rem]">
      <p
        className={`text-[0.9375rem] h-[1.125rem] mb-[0.125rem] ${
          rest.disabled ? 'text-gray-40' : 'text-gray-90'
        }`}
      >
        {label}
      </p>

      <input
        value={value}
        className={`border-b-2 font-[400] px-[0.75rem] outline-none placeholder::text-[1.125rem] disabled:text-gray-40 distabled:border-gray-40 bg-inherit h-[2.75rem] ${WIDTH[width]} ${color}`}
        {...rest}
      />
      {!isValid && value.length > 0 && guide && (
        <p className="px-[0.75rem] text-[0.75rem] text-gray-50 h-[1.4375rem] leading-[1.5rem]">
          {guide}
        </p>
      )}
    </label>
  );
};

export default Input;
