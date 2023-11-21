import { useNavigate } from 'react-router-dom';
import { ReactComponent as LoginIcon } from '../../../assets/icon_logout.svg';

const BeforeLogin = () => {
  const nav = useNavigate();

  const onClickLogin = () => nav('/login');

  return (
    <span
      className="flex p-2 text-[#555] text-[0.9375rem] font-[400] -tracking-[0.00469rem] cursor-pointer"
      onClick={onClickLogin}
    >
      <LoginIcon />
      <span className="ml-[0.5rem]">LOGIN</span>
    </span>
  );
};

export default BeforeLogin;
