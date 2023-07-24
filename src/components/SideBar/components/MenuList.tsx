import MenuItem from './MenuItem';

const MenuList = () => {
  return (
    <ul className="text-text text-sm">
      <MenuItem type="page" to="/">
        HOME
      </MenuItem>
      <MenuItem type="page" to="place">
        플레이스
      </MenuItem>
    </ul>
  );
};

export default MenuList;
