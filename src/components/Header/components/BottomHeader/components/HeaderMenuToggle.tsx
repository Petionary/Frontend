import { ReactComponent as MenuToggle } from '../../../../../assets/MenuToggle.svg';
import { ReactComponent as BackIcon } from '../../../../../assets/BackIcon.svg';
import { ComponentPropsWithRef } from 'react';

interface HeaderMenuToggleProps extends ComponentPropsWithRef<'div'> {
  menuToggle: boolean;
}

const HeaderMenuToggle = ({ menuToggle, ...rest }: HeaderMenuToggleProps) => {
  return (
    <div className="flex items-center justify-between w-[4rem] cursor-pointer" {...rest}>
      {menuToggle ? (
        <BackIcon />
      ) : (
        <MenuToggle className="cursor-pointer stroke-light hover:stroke-dark" />
      )}
      <span>카테고리</span>
    </div>
  );
};

export default HeaderMenuToggle;
