import { ChangeEvent } from 'react';
import MenuItem from './components/MenuItem';

interface MenusProps {
  content: 'history' | 'pet' | 'user';
  // eslint-disable-next-line no-unused-vars
  handleMenu: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Menus = ({ content, handleMenu }: MenusProps) => {
  return (
    <section className="text-sm text-light flex flex-col text-center w-[25rem] sm:w-full p-5 border-r h-[90vh] sm:h-[6rem] sm:border-none">
      <span className="text-md text-text py-2">마이페이지</span>
      <div className="flex flex-col w-full sm:flex-row sm:justify-center">
        <MenuItem title="user" onChange={handleMenu} content={content} />
        <MenuItem title="pet" onChange={handleMenu} content={content} />
        <MenuItem title="history" onChange={handleMenu} content={content} />
      </div>
      {/* <span>회원탈퇴</span> */}
    </section>
  );
};

export default Menus;
