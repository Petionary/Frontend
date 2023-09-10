interface NavBarProps {
  pathname: string;
  navHome: () => void;
  navPlace: () => void;
}

const NavBar = ({ pathname, navHome, navPlace }: NavBarProps) => {
  return (
    <nav className="flex justify-between text-sm text-gray-100 w-[12.25rem]">
      <span
        className={`cursor-pointer border-b hover:border-gray-100 p-2 ${
          pathname === '/' ? 'border-gray-100' : 'border-white'
        }`}
        onClick={navHome}
      >
        홈
      </span>
      <span
        className={`cursor-pointer border-b hover:border-gray-100 p-2 ${
          pathname.split('/')[1] === 'place' ? 'border-gray-100' : 'border-white'
        }`}
        onClick={navPlace}
      >
        플레이스
      </span>
      <span className={`cursor-pointer border-b border-white hover:border-gray-100 p-2 `}>
        실종신고
      </span>
    </nav>
  );
};

export default NavBar;
