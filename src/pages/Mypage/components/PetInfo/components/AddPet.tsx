import { ComponentPropsWithoutRef } from 'react';

const AddPet = (props: ComponentPropsWithoutRef<'li'>) => {
  return (
    <li
      className="relative w-full h-[12rem] my-2 border-4 rounded-md p-3 shadow-sm flex justify-around items-center cursor-pointer"
      {...props}
    >
      <div className="w-[7rem] h-[7rem] bg-gray-200 rounded-full" />
      <div className="w-[12rem] p-2 flex flex-col text-sm justify-between h-full">
        <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
        <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
        <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
        <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
        <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
        <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
        <span className="w-[5rem] h-[0.3rem] bg-gray-200 rounded-full" />
        <span className="w-full h-[0.3rem] bg-gray-200 rounded-full" />
      </div>
      <div className="absolute text-lg font-bold text-center opacity-0 w-full h-full align-middle py-20 hover:opacity-20 bg-white">
        새로운 반려동물 추가하기
      </div>
    </li>
  );
};

export default AddPet;
