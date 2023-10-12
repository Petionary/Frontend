import { ChangeEvent } from 'react';

interface MenuItemProps {
  // eslint-disable-next-line no-unused-vars
  onClickMenu: (e: ChangeEvent<HTMLInputElement>) => void;
  menu: 'store' | 'map' | 'reviews';
  curr_menu: 'store' | 'map' | 'reviews';
}

const MenuItem = ({ menu, curr_menu, onClickMenu }: MenuItemProps) => {
  const MENU_TEXT = {
    store: '매장정보',
    map: '위치',
    reviews: '이용후기',
  };

  const isCurrMenu = menu === curr_menu ? 'border-b-[0.25rem]' : '';

  return (
    <label className="cursor-pointer mr-[3.54vw]">
      <input
        type="checkbox"
        className="sr-only peer"
        name="menu"
        value={menu}
        onChange={onClickMenu}
      />
      <span
        className={`text-[0.9375rem] font-[400] -tracking-[0.00469rem] text-black hover:border-b-[0.25rem] border-primary pb-[0.5rem] ${isCurrMenu}`}
      >
        {MENU_TEXT[menu]}
      </span>
    </label>
  );
};

export default MenuItem;
