import { ChangeEvent } from 'react';
import MenuItem from './components/MenuItem';

interface MenusProps {
  content: 'history' | 'pet' | 'user';
  // eslint-disable-next-line no-unused-vars
  handleMenu: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Menus = ({ content, handleMenu }: MenusProps) => {
  return (
    <section className="mx-auto text-xs text-light flex text-center justify-evenly w-[20rem]">
      <MenuItem title="user" onChange={handleMenu} content={content} />
      <MenuItem title="pet" onChange={handleMenu} content={content} />
      <MenuItem title="history" onChange={handleMenu} content={content} />
    </section>
  );
};

export default Menus;
