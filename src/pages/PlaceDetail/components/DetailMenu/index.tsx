import { ChangeEvent } from 'react';
import MenuItem from './components/MenuItem';

interface DetailMenuProps {
  // eslint-disable-next-line no-unused-vars
  onClickMenu: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DetailMenu = ({ onClickMenu }: DetailMenuProps) => {
  return (
    <section className="py-[2rem]">
      <MenuItem onClickMenu={onClickMenu} menu="store" />
      <MenuItem onClickMenu={onClickMenu} menu="map" />
      <MenuItem onClickMenu={onClickMenu} menu="reviews" />
    </section>
  );
};

export default DetailMenu;
