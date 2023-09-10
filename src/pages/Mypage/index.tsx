import InfoTitle from './components/InfoTitle';
import SideMenu from './components/SideMenu';

const Mypage = () => {
  return (
    <main className="px-[16.7vw] flex w-full h-[calc(100vh-100px)] sm:flex-col mx-auto bg-background">
      <SideMenu />
      <InfoTitle title="my profile" />
    </main>
  );
};

export default Mypage;
