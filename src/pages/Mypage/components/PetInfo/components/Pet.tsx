import { mock } from '..';

interface PetProps {
  pet: typeof mock;
}

const Pet = ({ pet }: PetProps) => {
  return (
    <li className="w-full h-[12rem] my-2 border rounded-md p-3 shadow-sm flex justify-around items-center">
      <div className="w-[7rem] h-[7rem] bg-gray-200 rounded-full text-center" />
      <div className="w-[12rem] p-2 flex flex-col text-xs justify-between h-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="w-[5rem] text-light font-bold">이름</span>
            <span className="w-full text-light">{pet.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="w-[5rem] text-light font-bold">성별</span>
            <span className="w-full text-light">{pet.gender}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="w-[5rem] text-light font-bold">생년월일</span>
          <span className="w-full text-light">{pet.birthDate}</span>
        </div>
        <div className="flex flex-col">
          <span className="w-[5rem] text-light font-bold">구분</span>
          <span className="w-full text-light">{pet.species}</span>
          <span className="w-full text-light">{pet.detailSpecies}</span>
        </div>
      </div>
    </li>
  );
};

export default Pet;
