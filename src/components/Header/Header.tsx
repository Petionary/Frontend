import Input from '../Input/Input';
import { ReactComponent as MenuToggle } from '../../assets/MenuToggle.svg';
import Icons from './components/Icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate();
  return (
    <header className="flex justify-between px-10 w-full h-[4rem]">
      <section className="flex items-center w-[10rem] justify-between">
        <MenuToggle
          className="cursor-pointer stroke-light hover:stroke-dark"
          onClick={() => alert('click')}
        />
        <div
          className="font-bold bg-primary-dark py-2 px-3 text-white cursor-pointer"
          onClick={() => nav('/')}
        >
          PETIONARY.
        </div>
      </section>
      <section className="flex items-center justify-between w-[30rem]">
        <Input width="md" placeholder="검색어를 입력해 주세요." rounded />
        <Icons
          handleLogout={() => alert('log out')}
          handleToMessage={() => alert('message')}
          handleToMypage={() => alert('mypage')}
        />
      </section>
    </header>
  );
};

export default Header;
