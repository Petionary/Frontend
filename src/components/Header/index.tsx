import SideBar from '../SideBar';
import useToggle from '../../hooks/useToggle';
import TopHeader from './components/TopHeader';
import BottomHeader from './components/BottomHeader';

const Header = () => {
  const [menuToggle, handleMenuToggle] = useToggle(false);

  return (
    <>
      <header className="flex flex-col">
        <TopHeader />
        <BottomHeader menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
      </header>
      <SideBar menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
    </>
  );
};

export default Header;
