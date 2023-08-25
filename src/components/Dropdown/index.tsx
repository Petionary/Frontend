import { ComponentPropsWithoutRef } from 'react';

interface DropdownProps extends ComponentPropsWithoutRef<'select'> {
  width?: 'sm' | 'lg';
}

const WIDTH = {
  sm: 'w-[6.75rem]',
  lg: 'w-[10.8125rem]',
};

const Dropdown = ({ width = 'lg', children, ...rest }: DropdownProps) => {
  return (
    <select
      className={`${WIDTH[width]} h-[2.375rem] text-[0.9375rem] rounded-[1.88rem] bg-gray-20 px-[0.75rem]`}
      {...rest}
    >
      {children}
    </select>
  );
};

export default Dropdown;
