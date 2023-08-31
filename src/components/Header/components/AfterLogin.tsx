import { ReactComponent as UserIcon } from '../../../assets/UserIcon.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/LogoutIcon.svg';

interface AfterLoginProps {
  navMypage: () => void;
  handleLogout: () => void;
}

const AfterLogin = ({ navMypage, handleLogout }: AfterLoginProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="p-2" onClick={navMypage}>
        <UserIcon className="cursor-pointer stroke-gray-10" />
      </span>
      <span className="p-2" onClick={handleLogout}>
        <LogoutIcon className="cursor-pointer stroke-gray-10" />
      </span>
    </div>
  );
};

export default AfterLogin;
