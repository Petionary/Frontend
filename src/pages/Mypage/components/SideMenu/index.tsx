import { useNavigate } from 'react-router-dom';
import MenuItem from './components/MenuItem';

interface SideMenuProps {
  curr_menu: string | undefined;
}

const SideMenu = ({ curr_menu }: SideMenuProps) => {
  const nav = useNavigate();
  return (
    <aside className="w-[13.5rem] h-full bg-white border-r-[2px] border-gray-40 flex flex-col px-[2.19rem] py-[2.245rem] items-start">
      <MenuItem onClick={() => nav('/mypage/user')} curr_menu={curr_menu} menu="user" />
      <MenuItem onClick={() => nav('/mypage/pet')} curr_menu={curr_menu} menu="pet" />
      <MenuItem onClick={() => nav('/mypage/history')} curr_menu={curr_menu} menu="history" />
      <MenuItem onClick={() => nav('/mypage/like')} curr_menu={curr_menu} menu="like" />
    </aside>
  );
};

export default SideMenu;
