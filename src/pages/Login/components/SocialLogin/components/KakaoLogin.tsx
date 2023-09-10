import { ComponentPropsWithoutRef } from 'react';
import { ReactComponent as KakaoIcon } from '../../../../../assets/icon_kakao.svg';

interface KakaoLoginProps extends ComponentPropsWithoutRef<'button'> {}

const KakaoLogin = ({ ...rest }: KakaoLoginProps) => {
  return (
    <button
      className="w-[21.375rem] h-[3.75rem] rounded-[0.25rem] border border-gray-40 bg-white flex justify-center items-center"
      {...rest}
    >
      <KakaoIcon className="mr-[1rem]" />
      <p className="w-[5.3125rem] text-[1rem] text-gray-100 font-[600] leading-[1.5rem] -tracking-[0.025rem]">
        카카오 로그인
      </p>
    </button>
  );
};

export default KakaoLogin;
