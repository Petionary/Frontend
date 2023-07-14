import { ReactComponent as MessageIcon } from '../../../assets/MessageIcon.svg';
import { ReactComponent as UserIcon } from '../../../assets/UserIcon.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/LogoutIcon.svg';

interface IconsProps {
  handleToMessage: () => void;
  handleToMypage: () => void;
  handleLogout: () => void;
}

const Icons = ({ handleLogout, handleToMessage, handleToMypage }: IconsProps) => {
  return (
    <div className="flex w-[8rem] justify-between">
      <span className="p-2 hover:bg-gray-100 rounded-lg">
        <MessageIcon className="cursor-pointer" onClick={handleToMessage} />
      </span>
      <span className="p-2 hover:bg-gray-100 rounded-lg">
        <UserIcon className="cursor-pointer" onClick={handleToMypage} />
      </span>
      <span className="p-2 hover:bg-gray-100 rounded-lg">
        <LogoutIcon className="cursor-pointer" onClick={handleLogout} />
      </span>
    </div>
  );
};

export default Icons;
