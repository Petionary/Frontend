import { ComponentPropsWithoutRef } from 'react';

interface MenuItemProps extends ComponentPropsWithoutRef<'li'> {
  nav: () => void;
}

const MenuItem = ({ children, nav }: MenuItemProps) => {
  return (
    <li
      className="w-[80%] border border-transparent mx-auto my-1 px-2 text-center py-3 rounded-md hover:shadow-md hover:font-bold hover:border-gray-100"
      onClick={nav}
    >
      {children}
    </li>
  );
};

export default MenuItem;
