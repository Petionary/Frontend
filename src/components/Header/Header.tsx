import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../store';
import { handleMenuToggle } from '../../store/slices/toggleSlice';

import SideBar from '../SideBar/SideBar';
import Input from '../Input/Input';

import Icons from './components/Icons';
import HeaderLogo from './components/HeaderLogo';
import HeaderMenuToggle from './components/HeaderMenuToggle';

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { menuToggle } = useSelector((state: ReducerType) => state.toggle);
  const nav = useNavigate();
  const handleMenuOpen = () => dispatch(handleMenuToggle());

  return (
    <>
      <header className="flex justify-between px-10 w-full h-[4rem]">
        <section className="flex items-center w-[10rem] justify-between sm:w-full">
          <HeaderMenuToggle menuToggle={menuToggle} handleMenuOpen={handleMenuOpen} />
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
