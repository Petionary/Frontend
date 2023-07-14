import MenuItem from './MenuItem';

const MenuList = () => {
  return (
    <ul className="text-text text-sm">
      <MenuItem nav={() => alert('nav')}>HOME</MenuItem>
      <MenuItem nav={() => alert('nav')}>ABOUT</MenuItem>
      <MenuItem nav={() => alert('nav')}>중고거래게시판</MenuItem>
      <MenuItem nav={() => alert('nav')}>자랑게시판</MenuItem>
      <MenuItem nav={() => alert('nav')}>반려동물 동행 검색</MenuItem>
      <MenuItem nav={() => alert('nav')}>분실신고</MenuItem>
    </ul>
  );
};

export default MenuList;
