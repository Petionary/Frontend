import { ComponentPropsWithoutRef } from 'react';

interface DropdownProps extends ComponentPropsWithoutRef<'select'> {}

const Dropdown = ({ children, ...rest }: DropdownProps) => {
  return (
    <select className="w-[10rem] text-xs px-2 m-2 h-[2rem] border rounded-md border-dark" {...rest}>
      {children}
    </select>
  );
};

export default Dropdown;
