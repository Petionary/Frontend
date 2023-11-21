import { useLocation, useNavigate } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';

import SideBar from '../SideBar';

import { ReactComponent as LogoBanner } from '../../assets/logo font.svg';
import NavBar from './components/NavBar';
import HeaderMenuToggle from './components/HeaderMenuToggle';
import BeforeLogin from './components/BeforeLogin';

const Header = () => {
  const [menuToggle, handleMenuToggle] = useToggle(false);
  const { pathname } = useLocation();
  const nav = useNavigate();

  return (
    <>
      <header className="flex justify-between items-center pl-[16.7vw] pr-[15.625vw] h-[6.25rem] border-b border-gray-40">
        <LogoBanner onClick={() => nav('/')} className="w-[8rem] cursor-pointer" />
        <div className="flex w-[30rem] justify-between items-center sm:hidden">
          <NavBar pathname={pathname} navHome={() => nav('/')} navPlace={() => nav('place')} />
          <BeforeLogin />
          {/* <AfterLogin navMypage={() => nav('/mypage')} handleLogout={() => alert('logout')} /> */}
        </div>
        <HeaderMenuToggle
          menuToggle={menuToggle}
          className="lg:hidden"
          onClick={handleMenuToggle}
        />
      </header>
      <SideBar menuToggle={menuToggle} handleMenuToggle={handleMenuToggle} />
    </>
  );
};

export default Header;
