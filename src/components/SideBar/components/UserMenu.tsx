import MenuItem from './MenuItem';

const UserMenu = () => {
  return (
    <ul className="flex flex-col p-1 mx-auto text-center text-xs">
      <MenuItem type="user" to="/mypage">
        마이페이지
      </MenuItem>
      <MenuItem type="user" to="/mypage">
        쪽지
      </MenuItem>
      <MenuItem type="user" to="/mypage">
        로그아웃
      </MenuItem>
    </ul>
  );
};

export default UserMenu;
