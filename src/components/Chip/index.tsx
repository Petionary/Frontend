import { ComponentPropsWithRef } from 'react';

interface ChipProps extends ComponentPropsWithRef<'input'> {
  text: string;
}

const Chip = ({ text, ...rest }: ChipProps) => {
  return (
    <label>
      <input type="checkbox" className="peer sr-only" readOnly {...rest} />
      <span className="cursor-pointer bg-gray-20 px-[1rem] py-[0.62rem] rounded-[1.25rem] text-[0.9375rem] peer-checked:text-white peer-checked:bg-primary peer-checked:cursor-auto">
        {text}
      </span>
    </label>
  );
};

export default Chip;
