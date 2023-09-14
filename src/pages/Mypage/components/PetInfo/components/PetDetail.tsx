interface PetDetailProps {
  petId: number | undefined;
}

const PetDetail = ({ petId }: PetDetailProps) => {
  // prop으로 전달받은 id에 맞는 데이터 fetch
  // id === undefined => pet 추가 페이지 보여주기
  return <section className="">{petId}</section>;
};

export default PetDetail;
