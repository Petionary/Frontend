const NavBar = () => {
  return (
    <nav className="flex items-center w-[15rem] justify-between sm:hidden">
      <span className="cursor-pointer hover:font-bold">Place</span>
      <span className="cursor-pointer hover:font-bold">Community</span>
      <span className="cursor-pointer hover:font-bold">Report</span>
    </nav>
  );
};

export default NavBar;
