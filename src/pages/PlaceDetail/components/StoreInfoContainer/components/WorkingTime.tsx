import InfoContent from '../../InfoContent';
import InfoTitle from '../../InfoTitle';

const WorkingTime = () => {
  return (
    <section className="mt-[3.75rem] pb-[3.75rem] border-b-[0.0625rem] border-gray-40">
      <InfoTitle title="영업시간" />
      <InfoContent info_header="월요일" info_content="09:00 - 13:00" />
      <InfoContent info_header="화요일" info_content="09:00 - 13:00" />
      <InfoContent info_header="수요일" info_content="09:00 - 13:00" />
      <InfoContent info_header="목요일" info_content="09:00 - 13:00" />
      <InfoContent info_header="금요일" info_content="09:00 - 13:00" />
      <InfoContent info_header="토요일" info_content="09:00 - 13:00" />
      <InfoContent info_header="일요일" info_content="09:00 - 13:00" />
    </section>
  );
};

export default WorkingTime;
