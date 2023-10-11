import { ChangeEvent } from 'react';

interface MenuItemProps {
  // eslint-disable-next-line no-unused-vars
  onClickMenu: (e: ChangeEvent<HTMLInputElement>) => void;
  menu: 'store' | 'map' | 'reviews';
}

const MenuItem = ({ menu, onClickMenu }: MenuItemProps) => {
  const MENU_TEXT = {
    store: '매장정보',
    map: '위치',
    reviews: '이용후기',
  };

  return (
    <label>
      <input
        type="checkbox"
        className="sr-only peer"
        name="menu"
        value="store"
        onChange={onClickMenu}
      />
      <span>{MENU_TEXT[menu]}</span>
    </label>
  );
};

export default MenuItem;
