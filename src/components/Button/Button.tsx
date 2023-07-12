import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: 'sm' | 'md' | 'lg' | 'full'; // default = 'md'
  color?: 'primary' | 'secondary' | 'red'; // default = 'primary'
  position?: 'relative' | 'fixed' | 'absolute'; // default = 'relative'
  rounded?: boolean; // default = true
  margin?: string; // default = 'm-0'
}

const BTN_COLOR = {
  primary: 'bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:hover:bg-primary',
  secondary: 'bg-secondary hover:bg-secondary-dark disabled:opacity-50 disabled:hover:bg-secondary',
  red: 'bg-red hover:bg-red-dark disabled:opacity-50 disabled:hover:bg-red',
};

const BTN_SIZE = {
  sm: 'min-w-[3rem]',
  md: 'min-w-[10rem]',
  lg: 'min-w-[20rem]',
  full: 'w-full',
};

const Button = ({
  size = 'md',
  color = 'primary',
  rounded = true,
  margin = 'm-0',
  position = 'relative',
  children,
  ...rest
}: ButtonProps) => {
  const button_rounded = rounded ? `rounded-full` : '';

  return (
    <button
      className={`btn ${BTN_SIZE[size]} ${BTN_COLOR[color]} ${position} ${button_rounded} ${margin}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
