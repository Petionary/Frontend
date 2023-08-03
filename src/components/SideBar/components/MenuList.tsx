import MenuItem from './MenuItem';

interface MenuListProps {
  handleMenuToggle: () => void;
}

const MenuList = ({ handleMenuToggle }: MenuListProps) => {
  return (
    <ul className="text-text text-sm">
      <MenuItem type="page" to="/" handleMenuToggle={handleMenuToggle}>
        HOME
      </MenuItem>
      <MenuItem type="page" to="place" handleMenuToggle={handleMenuToggle}>
        플레이스
      </MenuItem>
    </ul>
  );
};

export default MenuList;
