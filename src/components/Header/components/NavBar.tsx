interface NavBarProps {
  pathname: string;
  navHome: () => void;
  navPlace: () => void;
}

const NavBar = ({ pathname, navHome, navPlace }: NavBarProps) => {
  return (
    <nav className="flex justify-between text-sm text-gray-100 w-[20rem]">
      <span
        className={`cursor-pointer border-b border-white hover:border-gray-100 p-2 ${
          pathname === '/' ? 'border-gray-100' : 'border-white'
        }`}
        onClick={navHome}
      >
        Home
      </span>
      <span
        className={`cursor-pointer border-b hover:border-gray-100 p-2 ${
          pathname === '/place' ? 'border-gray-100' : 'border-white'
        }`}
        onClick={navPlace}
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
  );
};

export default NavBar;
