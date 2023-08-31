import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: 'sm' | 'lg';
  cta?: boolean;
}

const Button = ({ children, cta = false, size = 'sm', ...rest }: ButtonProps) => {
  const width = size === 'sm' ? 'min-w-[5.0625rem]' : 'min-w-[14.125rem]';
  const color = !cta ? 'text-primary bg-none' : 'text-white bg-primary';
  return (
    <button
      className={`${color} ${width} text-[0.9375rem] font-[700] -tracking-[0.0469rem] h-[3.625rem] px-[1.5rem] rounded-[0.13rem] border border-primary disabled:border-none disabled:bg-gray-20 disabled:text-gray-40`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
