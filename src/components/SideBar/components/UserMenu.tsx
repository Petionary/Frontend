import MenuItem from './MenuItem';

interface UserMenuProps {
  handleMenuToggle: () => void;
}

const UserMenu = ({ handleMenuToggle }: UserMenuProps) => {
  return (
    <ul className="flex flex-col p-1 mx-auto text-center text-xs">
      <MenuItem type="user" to="/mypage" handleMenuToggle={handleMenuToggle}>
        마이페이지
      </MenuItem>
      <MenuItem type="user" to="/mypage" handleMenuToggle={handleMenuToggle}>
        쪽지
      </MenuItem>
      <MenuItem type="user" to="/mypage" handleMenuToggle={handleMenuToggle}>
        로그아웃
      </MenuItem>
    </ul>
  );
};

export default UserMenu;
