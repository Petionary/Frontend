import { ReactComponent as UserIcon } from '../../../assets/UserIcon.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/LogoutIcon.svg';

interface IconsProps {
  navMypage: () => void;
  handleLogout: () => void;
}

const Icons = ({ navMypage, handleLogout }: IconsProps) => {
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

export default Icons;
