import { ReactComponent as ScrollArrow } from '../../../../assets/arrow-scroll.svg';

const WelcomeContainer = () => {
  return (
    <section className="h-[calc(100vh-100px)] border-b flex flex-col justify-around relative snap-start snap-always">
      <h1 className="text-gray-100 text-[6.25rem] font-[700] leading-[7.5rem] -tracking-[0.03125rem] px-[20rem]">
        For memory the place <br /> with my pet, together <br /> PETIONARY
      </h1>
      {/* welcome message */}
      <div className="text-center text-secondary h-[3.125rem] flex flex-col justify-between">
        <ScrollArrow className="mx-auto" />
        <div>Scroll down</div>
      </div>
      {/* scroll - 스크롤 시 1. 플레이스 추천 -> 2. 실종 신고 알림*/}
      <div className="absolute bottom-0" />
    </section>
  );
};

export default WelcomeContainer;
