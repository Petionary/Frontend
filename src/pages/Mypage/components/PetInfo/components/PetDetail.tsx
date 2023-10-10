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
      <ProfileImg imgSrc="" editToggle={editToggle} />

      <form className="w-[33.4375rem]">
        <div className="flex w-full justify-between">
          <Input label="이름" value="" width="sm" />
          <Input label="생년월일" value="" width="sm" />
        </div>
      </form>
    </section>
  );
};

export default PetDetail;
