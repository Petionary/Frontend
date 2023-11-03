import { ComponentPropsWithoutRef } from 'react';

interface PetSpeciesRadioProps extends ComponentPropsWithoutRef<'input'> {
  checked_pet?: 'dog' | 'cat' | 'etc';
  type: 'dog' | 'cat' | 'etc' | 'male' | 'female';
}

const TYPE = {
  male: '🚹',
  female: '🚺',
  dog: '🐶',
  cat: '🐱',
  etc: '👼',
};

const PetInfoRadio = ({ type, checked_pet, ...rest }: PetSpeciesRadioProps) => {
  return (
    <label className="flex items-end h-[2.75rem]">
      <input
        type="radio"
        name="species"
        value={type}
        className="mr-[0.88rem] cursor-pointer border-[4px] rounded-full w-[1rem] h-[1rem] checked:bg-primary"
        {...rest}
      />
      <span className="mr-[4.87rem] cursor-pointer">{TYPE[type]}</span>
      {type !== 'male' && type !== 'female' && (
        <input
          type="text"
          name="detail_species"
          className="border-b-[0.06rem] w-[6.75rem] py-[0.81rem] h-[2rem] border-gray-40 outline-none disabled:bg-inherit"
          disabled={checked_pet !== type}
        />
      )}
    </label>
  );
};

export default PetInfoRadio;
