import { ReactComponent as MyPageIcon } from '../../../assets/icon_mypage.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/icon_logout.svg';

interface AfterLoginProps {
  navMypage: () => void;
  handleLogout: () => void;
}

const AfterLogin = ({ navMypage, handleLogout }: AfterLoginProps) => {
  return (
    <div className="flex items-center justify-between">
      <span
        className="flex p-2 text-[#555] text-[0.9375rem] font-[400] -tracking-[0.00469rem] cursor-pointer"
        onClick={navMypage}
      >
        <MyPageIcon />
        <span className="ml-[0.5rem]">MY</span>
      </span>
      <span
        className="flex p-2 text-[#555] text-[0.9375rem] font-[400] -tracking-[0.00469rem] cursor-pointer"
        onClick={handleLogout}
      >
        <LogoutIcon />
        <span className="ml-[0.5rem]">LOGOUT</span>
      </span>
    </div>
  );
};

export default AfterLogin;
