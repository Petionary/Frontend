import { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps extends ComponentPropsWithoutRef<'li'> {
  handleMenuToggle: () => void;
  type: 'page' | 'user';
  to: string;
}

const MenuItem = ({ children, type, to, handleMenuToggle }: MenuItemProps) => {
  const nav = useNavigate();
  const style = type === 'page' ? 'w-full mx-auto text-center py-3 rounded-md' : 'text-light';
  const handleNavigate = () => {
    nav(to);
    handleMenuToggle();
  };

  return (
    <li className={`my-1 p-2 cursor-pointer hover:font-bold ${style}`} onClick={handleNavigate}>
      {children}
    </li>
  );
};

export default MenuItem;
