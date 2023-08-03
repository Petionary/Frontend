import HeaderMenuToggle from '../HeaderMenuToggle';

interface BottomHeaderProps {
  menuToggle: boolean;
  handleMenuToggle: () => void;
}

const BottomHeader = ({ menuToggle, handleMenuToggle }: BottomHeaderProps) => {
  return (
    <section className="w-full items-center flex justify-between text-xs text-gray-100 border-t border-b h-[3.5rem] px-[10rem]">
      <div className="flex items-center w-[30rem] justify-between">
        <div
          className="flex items-center justify-between w-[4rem] cursor-pointer"
          onClick={handleMenuToggle}
        >
          <HeaderMenuToggle menuToggle={menuToggle} handleMenuOpen={handleMenuToggle} />
          <span>카테고리</span>
        </div>
        <nav className="flex items-center w-[15rem] justify-between">
          <span>Place</span>
          <span>Community</span>
          <span>Report</span>
        </nav>
      </div>

      <div className="flex items-center w-[7rem] justify-between text-gray-70">
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </section>
  );
};

export default BottomHeader;
