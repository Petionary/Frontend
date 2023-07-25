import MenuList from './components/MenuList';
import UserMenu from './components/UserMenu';

interface SideBarProps {
  menuToggle: boolean;
  handleMenuToggle: () => void;
}

const SideBar = ({ menuToggle, handleMenuToggle }: SideBarProps) => {
  const isOpen = menuToggle ? 'lg:translate-x-0 lg:m-0 m-auto' : '-translate-x-[110%] m-0';
  return (
    <aside
      className={`sm:w-full w-[15rem] h-[90vh] overflow-y-auto p-5 flex flex-col justify-between duration-500 ${isOpen} bg-[#fff] absolute z-30 shadow-lg`}
    >
      <MenuList handleMenuToggle={handleMenuToggle} />
      <UserMenu handleMenuToggle={handleMenuToggle} />
    </aside>
  );
};

export default SideBar;
