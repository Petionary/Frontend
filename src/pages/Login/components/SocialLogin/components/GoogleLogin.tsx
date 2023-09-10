import { ComponentPropsWithoutRef } from 'react';
import { ReactComponent as GoogleIcon } from '../../../../../assets/icon_google.svg';

interface GoogleLoginProps extends ComponentPropsWithoutRef<'button'> {}

const GoogleLogin = ({ ...rest }: GoogleLoginProps) => {
  return (
    <button
      className="w-[21.375rem] h-[3.75rem] my-[0.75rem] rounded-[0.25rem] border border-gray-40 bg-white flex items-center justify-center"
      {...rest}
    >
      <GoogleIcon className="mr-[1rem]" />
      <p className="w-[5.3125rem] text-[1rem] text-gray-100 font-[600] leading-[1.5rem] -tracking-[0.025rem]">
        구글 로그인
      </p>
    </button>
  );
};

export default GoogleLogin;
