import { ComponentPropsWithoutRef } from 'react';

interface MenuItemProps extends ComponentPropsWithoutRef<'input'> {
  content: 'history' | 'pet' | 'user';
  title: 'history' | 'pet' | 'user';
}

const TITLE = {
  history: '활동내역',
  pet: '회원정보',
  user: '반려동물정보',
};

const MenuItem = ({ title, content, ...rest }: MenuItemProps) => {
  return (
    <label className="p-2 border border-light w-[6rem]">
      <input
        type="checkbox"
        name="content"
        value={title}
        checked={content === title}
        className="peer sr-only"
        {...rest}
      />
      <span className="peer-checked:text-red">{TITLE[title]}</span>
    </label>
  );
};

export default MenuItem;
