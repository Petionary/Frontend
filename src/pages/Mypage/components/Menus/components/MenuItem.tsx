import { ComponentPropsWithoutRef } from 'react';

interface MenuItemProps extends ComponentPropsWithoutRef<'input'> {
  content: 'history' | 'pet' | 'user';
  title: 'history' | 'pet' | 'user';
}

const TITLE = {
  history: '활동내역',
  pet: '반려동물정보',
  user: '회원정보',
};

const MenuItem = ({ title, content, ...rest }: MenuItemProps) => {
  return (
    <label className="py-2 w-[5rem] mx-auto sm:mx-0 hover:text-dark">
      <input
        type="checkbox"
        name="content"
        value={title}
        checked={content === title}
        className="peer sr-only"
        {...rest}
      />
      <span className="peer-checked:text-primary-dark cursor-pointer">{TITLE[title]}</span>
    </label>
  );
};

export default MenuItem;
