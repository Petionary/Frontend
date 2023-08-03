import HeaderMenuToggle from './components/HeaderMenuToggle';
import NavBar from './components/NavBar';

interface BottomHeaderProps {
  menuToggle: boolean;
  handleMenuToggle: () => void;
}

const BottomHeader = ({ menuToggle, handleMenuToggle }: BottomHeaderProps) => {
  return (
    <section className="w-full items-center flex justify-between text-xs text-gray-100 border-t border-b h-[3.5rem] px-[10rem] sm:px-10">
      <div className="flex items-center w-[30rem] justify-between">
        <HeaderMenuToggle menuToggle={menuToggle} onClick={handleMenuToggle} />
        <NavBar />
      </div>
      <div className="flex items-center w-[7rem] justify-between text-gray-70">
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </section>
  );
};

export default BottomHeader;
