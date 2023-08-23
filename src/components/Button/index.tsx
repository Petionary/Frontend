import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  cta?: boolean;
}

const Button = ({ children, cta = false, ...rest }: ButtonProps) => {
  const color = !cta ? 'text-primary bg-none' : 'text-white bg-primary';
  return (
    <button
      className={`${color} min-w-[5.0625rem] text-[0.9375rem] h-[3.625rem] px-[1.5rem] rounded-[0.13rem] border border-primary disabled:border-none disabled:bg-gray-20 disabled:text-gray-40`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
