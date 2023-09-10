import { useNavigate, useParams } from 'react-router-dom';
import MenuItem from './components/MenuItem';

const SideMenu = () => {
  const { menu } = useParams();
  const nav = useNavigate();
  return (
    <aside className="w-[13.5rem] h-full bg-white border-r-[2px] border-gray-40 flex flex-col px-[2.19rem] py-[0.37rem] items-start">
      <MenuItem onClick={() => nav('/mypage/user')} curr_menu={menu} menu="user" />
      <MenuItem onClick={() => nav('/mypage/pet')} curr_menu={menu} menu="pet" />
      <MenuItem onClick={() => nav('/mypage/history')} curr_menu={menu} menu="history" />
      <MenuItem onClick={() => nav('/mypage/like')} curr_menu={menu} menu="like" />
    </aside>
  );
};

export default SideMenu;
