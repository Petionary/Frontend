import { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps extends ComponentPropsWithoutRef<'li'> {
  type: 'page' | 'user';
  to: string;
}

const MenuItem = ({ children, type, to }: MenuItemProps) => {
  const nav = useNavigate();
  const pageStyle =
    'w-[80%] border border-transparent mx-auto my-1 px-2 text-center py-3 rounded-md hover:shadow-md hover:font-bold hover:border-gray-100';
  const userStyle = 'my-1 p-2 cursor-pointer hover:font-bold text-light';

  return (
    <li className={type === 'page' ? pageStyle : userStyle} onClick={() => nav(to)}>
      {children}
    </li>
  );
};

export default MenuItem;
