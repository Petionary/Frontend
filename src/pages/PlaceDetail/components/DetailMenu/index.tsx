import { ChangeEvent } from 'react';
import MenuItem from './components/MenuItem';

interface DetailMenuProps {
  // eslint-disable-next-line no-unused-vars
  onClickMenu: (e: ChangeEvent<HTMLInputElement>) => void;
  curr_menu: 'store' | 'map' | 'reviews';
}

const DetailMenu = ({ curr_menu, onClickMenu }: DetailMenuProps) => {
  return (
    <section className="py-[2rem] px-[17.5vw] w-full">
      <MenuItem curr_menu={curr_menu} onClickMenu={onClickMenu} menu="store" />
      <MenuItem curr_menu={curr_menu} onClickMenu={onClickMenu} menu="map" />
      <MenuItem curr_menu={curr_menu} onClickMenu={onClickMenu} menu="reviews" />
    </section>
  );
};

export default DetailMenu;
