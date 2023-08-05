import { ReactComponent as LogoBanner } from '../../../../assets/logo font.svg';

import { useLocation, useNavigate } from 'react-router-dom';
// import HeaderSearch from './components/HeaderSearch';
import Icons from './components/Icons';

const TopHeader = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <section className="flex justify-between items-center w-full px-[10rem] h-[6.25rem] sm:px-10">
      {/* <div className="flex items-center w-[40rem] justify-between sm:w-full"> */}
      <LogoBanner onClick={() => nav('/')} className="w-[8rem] cursor-pointer" />
      {/* <HeaderSearch />
      </div> */}
      <div className="flex w-[30rem] justify-between items-center">
        <nav className="flex justify-between text-xs text-gray-100 w-[20rem]">
          <span
            className={`cursor-pointer border-b border-white hover:border-gray-100 p-2 ${
              pathname === '/' ? 'border-gray-100' : 'border-white'
            }`}
            onClick={() => nav('/')}
          >
            Home
          </span>
          <span
            className={`cursor-pointer border-b hover:border-gray-100 p-2 ${
              pathname === '/place' ? 'border-gray-100' : 'border-white'
            }`}
            onClick={() => nav('/place')}
          >
            Place
          </span>
          <span className={`cursor-pointer border-b border-white hover:border-gray-100 p-2 `}>
            Register
          </span>
          <span className={`cursor-pointer border-b border-white hover:border-gray-100 p-2 `}>
            Community
          </span>
        </nav>
        <Icons navMypage={() => nav('/mypage')} handleLogout={() => alert('logout')} />
      </div>
    </section>
  );
};

export default TopHeader;
