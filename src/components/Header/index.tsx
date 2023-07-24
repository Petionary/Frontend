import { useNavigate } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';
import Input from '../Input';

import Icons from './components/Icons';
import HeaderLogo from './components/HeaderLogo';
import HeaderMenuToggle from './components/HeaderMenuToggle';
import useToggle from '../../hooks/useToggle';

const Header = () => {
  const nav = useNavigate();
  const [menuToggle, handleMenuToggle] = useToggle(false);

  return (
    <>
      <header className="flex justify-between px-10 w-full h-[4rem]">
        <section className="flex items-center w-[10rem] justify-between sm:w-full">
          <HeaderMenuToggle menuToggle={menuToggle} handleMenuOpen={handleMenuToggle} />
          <HeaderLogo onClick={() => nav('/')} />
        </section>
        <section className="flex items-center justify-between w-[30rem] sm:hidden">
          <Input width="md" placeholder="검색어를 입력해 주세요." rounded />
          <Icons
            handleLogout={() => alert('log out')}
            handleToMessage={() => alert('message')}
            handleToMypage={() => alert('mypage')}
          />
        </section>
      </header>
      <SideBar menuToggle={menuToggle} />
    </>
  );
};

export default Header;
