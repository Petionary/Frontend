import { ComponentPropsWithoutRef } from 'react';

interface MenuItemProps extends ComponentPropsWithoutRef<'button'> {
  menu: string;
  curr_menu: string | undefined;
}

const MENU_TEXT: { [key: string]: string } = {
  user: '회원정보',
  pet: '반려동물정보',
  history: '활동내역',
  like: '관심목록',
};

const MenuItem = ({ menu, curr_menu, ...rest }: MenuItemProps) => {
  const color = menu === curr_menu ? 'text-primary' : 'text-gray-60';
  const weight = menu === curr_menu ? 'font-[600]' : 'font-[400]';
  return (
    <button
      className={`text-[1.25rem] leading-[2rem] -tracking-[0.00625rem] py-[1.875rem] ${weight} ${color}`}
      {...rest}
    >
      {MENU_TEXT[menu]}
    </button>
  );
};

export default MenuItem;
