import InfoContent from '../../InfoContent';
import InfoTitle from '../../InfoTitle';

const BasicInfo = () => {
  return (
    <section className="mt-[3.75rem] pb-[3.75rem] border-b-[0.0625rem] border-gray-40">
      <InfoTitle title="기본정보" />
      <InfoContent info_header="연락처" info_content="02-1234-5678" />
      <InfoContent info_header="홈페이지" info_content="https://localhost:8080" />
      <InfoContent info_header="주소" info_content="서울 송파구 삼전동" />
    </section>
  );
};

export default BasicInfo;
