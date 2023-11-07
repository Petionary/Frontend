import { ComponentPropsWithoutRef } from 'react';

interface PetSpeciesRadioProps extends ComponentPropsWithoutRef<'input'> {
  editToggle?: boolean;
  type: 'dog' | 'cat' | 'etc' | 'male' | 'female';
  detail_species?: string;
}

const TYPE = {
  male: '🚹',
  female: '🚺',
  dog: '🐶',
  cat: '🐱',
  etc: '👼',
};

const PetInfoRadio = ({ type, detail_species, editToggle, ...rest }: PetSpeciesRadioProps) => {
  return (
    <label className="flex items-end h-[2.75rem]">
      <input
        type="radio"
        value={type}
        className="mr-[0.88rem] cursor-pointer border-[4px] rounded-full w-[1rem] h-[1rem] checked:bg-primary"
        {...rest}
      />
      <span className="mr-[4.87rem] cursor-pointer">{TYPE[type]}</span>
      {type !== 'male' && type !== 'female' && (
        <input
          type="text"
          name="detail_species"
          value={detail_species}
          className="border-b-[0.06rem] w-[6.75rem] py-[0.81rem] h-[2rem] border-gray-40 outline-none disabled:bg-inherit placeholder:text-[0.9375rem] placeholder:font-[400] -tracking-[0.00469rem] text-[#666] disabled:text-gray-40 disabled:placeholder:text-gray-40"
          disabled={!editToggle}
          placeholder="상세 종 입력"
          onChange={rest.onChange}
        />
      )}
    </label>
  );
};

export default PetInfoRadio;
