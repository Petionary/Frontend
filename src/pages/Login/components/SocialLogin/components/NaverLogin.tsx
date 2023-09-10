import { ComponentPropsWithoutRef } from 'react';
import { ReactComponent as NaverIcon } from '../../../../../assets/icon_naver.svg';

interface NaverLoginProps extends ComponentPropsWithoutRef<'button'> {}

const NaverLogin = ({ ...rest }: NaverLoginProps) => {
  return (
    <button
      className="w-[21.375rem] h-[3.75rem] rounded-[0.25rem] border border-gray-40 bg-white flex items-center justify-center"
      {...rest}
    >
      <NaverIcon className="mr-[1rem]" />
      <p className="w-[5.3125rem] text-[1rem] text-gray-100 font-[600] leading-[1.5rem] -tracking-[0.025rem]">
        네이버 로그인
      </p>
    </button>
  );
};

export default NaverLogin;
