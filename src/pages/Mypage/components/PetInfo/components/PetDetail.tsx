import Input from '../../../../../components/Input';
import ProfileImg from '../../../../../components/ProfileImg';
import useToggle from '../../../../../hooks/useToggle';

interface PetDetailProps {
  petId: number | undefined;
}

const PetDetail = ({}: PetDetailProps) => {
  // prop으로 전달받은 id에 맞는 데이터 fetch
  // id === undefined => pet 추가 페이지 보여주기
  const [editToggle, handleEditToggle] = useToggle();
  return (
    <section className="bg-white w-[54.125rem] h-[45.125rem] mt-[5.25rem] flex items-start justify-between p-[2.5rem]">
      <ProfileImg imgSrc="../../../../../assets/img_pet_default.svg" editToggle={editToggle} />

      <form className="w-[33.4375rem]">
        <fieldset className="flex w-[26.81rem] justify-between">
          <Input label="이름" value="" width="xs" />
          <Input label="생년월일" value="" width="sm" />
        </fieldset>
        <div className="flex justify-between w-[26.81rem] ">
          <fieldset className="flex flex-col justify-start">
            <label className="h-[2rem]">
              <input type="radio" name="gender" />
              <span>🚹</span>
            </label>

            <label className="h-[2rem]">
              <input type="radio" name="gender" />
              <span>🚺</span>
            </label>
          </fieldset>
          <fieldset className="flex flex-col">
            <label className="flex items-end h-[2.75rem]">
              <input type="radio" name="specie" className="mr-[0.88rem] cursor-pointer" />
              <span className="mr-[4.87rem] cursor-pointer">🐶</span>
            </label>

            <label className="flex items-end h-[2.75rem]">
              <input type="radio" name="specie" className="mr-[0.88rem] cursor-pointer" />
              <span className="mr-[4.87rem] cursor-pointer">🐱</span>
            </label>

            <label className="flex items-end h-[2.75rem]">
              <input type="radio" name="specie" className="mr-[0.88rem] cursor-pointer" />
              <span className="mr-[4.87rem] cursor-pointer">👼</span>
              <input
                type="text"
                className="border-b-[0.06rem] w-[6.75rem] py-[0.81rem] h-[2rem] border-gray-40"
              />
            </label>
          </fieldset>
        </div>
        <button onClick={handleEditToggle}>임시</button>
      </form>
    </section>
  );
};

export default PetDetail;
