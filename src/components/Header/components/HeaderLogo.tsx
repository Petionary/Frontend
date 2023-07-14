import { ComponentPropsWithoutRef } from 'react';

const HeaderLogo = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className="font-bold bg-primary-dark py-2 px-3 text-white cursor-pointer" {...props}>
      PETIONARY.
    </div>
  );
};

export default HeaderLogo;
