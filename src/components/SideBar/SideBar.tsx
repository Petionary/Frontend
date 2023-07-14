import MenuList from './components/MenuList';
import UserMenu from './components/UserMenu';

interface SideBarProps {
  menuToggle: boolean;
}

const SideBar = ({ menuToggle }: SideBarProps) => {
  const isOpen = menuToggle
    ? 'lg:translate-x-0 lg:m-0 translate-x-0 m-auto'
    : '-translate-x-[110%] m-0';
  return (
    <aside
      className={`transition none w-[15rem] h-[90vh] overflow-y-auto p-5 flex flex-col justify-between ease-in-out duration-500 ${isOpen} bg-transparent`}
    >
      <MenuList />
      <UserMenu />
    </aside>
  );
};

export default SideBar;
