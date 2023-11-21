import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: 'xs' | 'sm' | 'lg';
  cta?: boolean;
}

const SIZE = {
  xs: 'min-w-[4.5rem] h-[2.375rem]',
  sm: 'min-w-[5.0625rem] h-[3.625rem]',
  lg: 'min-w-[14.125rem] h-[3.625rem]',
};

const Button = ({ children, cta = false, size = 'sm', ...rest }: ButtonProps) => {
  const color = !cta ? 'text-primary bg-none' : 'text-white bg-primary';

  return (
    <button
      className={`${color} ${SIZE[size]} text-[0.9375rem] font-[700] -tracking-[0.0469rem] px-[1.5rem] rounded-[0.13rem] border border-primary disabled:border-none disabled:bg-gray-20 disabled:text-gray-40`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
