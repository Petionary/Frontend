import { useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';

const MenuList = () => {
  const nav = useNavigate();
  return (
    <ul className="text-text text-sm">
      <MenuItem nav={() => nav('/')}>HOME</MenuItem>
      <MenuItem nav={() => nav('/place')}>플레이스</MenuItem>
      <MenuItem nav={() => alert('nav')}>ABOUT</MenuItem>
      <MenuItem nav={() => alert('nav')}>중고거래게시판</MenuItem>
      <MenuItem nav={() => alert('nav')}>자랑게시판</MenuItem>
      <MenuItem nav={() => alert('nav')}>분실신고</MenuItem>
    </ul>
  );
};

export default MenuList;
