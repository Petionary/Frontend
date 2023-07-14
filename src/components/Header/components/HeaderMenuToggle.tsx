import { ReactComponent as MenuToggle } from '../../../assets/MenuToggle.svg';
import { ReactComponent as BackIcon } from '../../../assets/BackIcon.svg';

interface HeaderMenuToggleProps {
  menuToggle: boolean;
  handleMenuOpen: () => void;
}

const HeaderMenuToggle = ({ menuToggle, handleMenuOpen }: HeaderMenuToggleProps) => {
  if (menuToggle) return <BackIcon onClick={handleMenuOpen} />;
  else
    return (
      <MenuToggle
        className="cursor-pointer stroke-light hover:stroke-dark"
        onClick={handleMenuOpen}
      />
    );
};

export default HeaderMenuToggle;
