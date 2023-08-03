import { ReactComponent as LogoBanner } from '../../../../assets/Logo_Banner.svg';

import { useNavigate } from 'react-router-dom';
import HeaderSearch from './components/HeaderSearch';
import Icons from './components/Icons';

const TopHeader = () => {
  const nav = useNavigate();
  return (
    <section className="flex justify-between w-full px-[10rem] h-[6.25rem] sm:px-10">
      <div className="flex items-center w-[40rem] justify-between sm:w-full">
        <LogoBanner onClick={() => nav('/')} className="w-[8rem] cursor-pointer" />
        <HeaderSearch />
        {/* <Input width="lg" placeholder="검색어를 입력해 주세요." rounded /> */}
      </div>
      <Icons navMypage={() => nav('/mypage')} handleLogout={() => alert('logout')} />
    </section>
  );
};

export default TopHeader;
