import Input from '../Input/Input';
import { ReactComponent as MenuToggle } from '../../assets/MenuToggle.svg';
import { ReactComponent as MessageIcon } from '../../assets/MessageIcon.svg';
import { ReactComponent as UserIcon } from '../../assets/UserIcon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/LogoutIcon.svg';

const Header = () => {
  return (
    <header className="flex justify-between px-10 w-full h-[4rem]">
      <section className="flex items-center w-[10rem] justify-between">
        <span>
          <MenuToggle className="cursor-pointer" onClick={() => alert('click')} />
        </span>
        <div className="font-bold bg-primary-dark py-2 px-3 text-white">PETIONARY.</div>
      </section>
      <section className="flex items-center justify-between w-[30rem]">
        <Input width="md" rounded />
        <div className="flex w-[8rem] justify-between">
          <span className="p-2">
            <MessageIcon />
          </span>
          <span className="p-2">
            <UserIcon />
          </span>
          <span className="p-2">
            <LogoutIcon />
          </span>
        </div>
      </section>
    </header>
  );
};

export default Header;
