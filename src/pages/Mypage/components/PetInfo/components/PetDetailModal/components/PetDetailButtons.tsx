import { FormEvent } from 'react';
import PetDetailButton from './PetDetailButton';
import { IPet } from '../../../../../../../utils/type';

interface PetDetailButtonsProps {
  editToggle: boolean;
  handleEditToggle: () => void;
  handleDetailToggle: () => void;
  petInput: IPet;
  initialInput: IPet;
  setInput: React.Dispatch<React.SetStateAction<IPet>>;
}

const PetDetailButtons = ({
  handleEditToggle,
  editToggle,
  handleDetailToggle,
  initialInput,
  setInput,
}: PetDetailButtonsProps) => {
  const handleEditPetInfo = (e: FormEvent) => {
    e.preventDefault();
    handleEditToggle();
  };

  const handleCloseDetailModal = (e: FormEvent) => {
    e.preventDefault();
    handleDetailToggle();
  };

  const handleCancelEdit = (e: FormEvent) => {
    e.preventDefault();
    setInput(initialInput);
    handleEditToggle();
  };

  //   const handleSaveEdit = (e: FormEvent) => {
  //     // patch method로 데이터 수정 요청
  //   };

  //   const handleReportMissing = (e: FormEvent) => {
  //     e.preventDefault();
  //     // post memthod로 missing 데이터에 해당 반려동물 추가
  //     // modal => 실종 시간 및 위치 입력
  //   };

  return (
    <section className="text-[#FF9666] text-[0.9375rem] font-400 -tracking-[0.00469rem] mt-[4.06rem] flex justify-end">
      <PetDetailButton
        buttonText={editToggle ? '취소' : '분실신고'}
        onClick={editToggle ? handleCancelEdit : handleEditPetInfo}
      />
      <PetDetailButton buttonText={editToggle ? '저장' : '정보수정'} onClick={handleEditPetInfo} />
      {!editToggle && <PetDetailButton buttonText="닫기" onClick={handleCloseDetailModal} />}
    </section>
  );
};

export default PetDetailButtons;
