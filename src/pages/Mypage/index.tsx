import { useParams } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import UserInfo from './components/UserInfo';

const MENU: { [key: string]: JSX.Element } = {
  user: <UserInfo />,
};

const Mypage = () => {
  const { menu } = useParams();
  return (
    <main className="px-[16.7vw] flex w-full h-[calc(100vh-100px)] sm:flex-col mx-auto bg-background">
      <SideMenu curr_menu={menu} />
      {MENU[menu as string]}
    </main>
  );
};

export default Mypage;
