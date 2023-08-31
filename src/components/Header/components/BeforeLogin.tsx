import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { handleLoginToggle } from '../../../store/slices/loginToggleSlice';

const BeforeLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispatch(handleLoginToggle());
  };

  return (
    <div className="w-[8.12rem] flex items-center justify-between">
      <span
        className="text-gray-60 text-[0.9375rem] -tracking-[0.0049rem] font-[400]"
        onClick={onClickLogin}
      >
        Log in
      </span>
      <span className="text-gray-60 text-[0.9375rem] -tracking-[0.0049rem] font-[400]">
        Sign up
      </span>
    </div>
  );
};

export default BeforeLogin;
