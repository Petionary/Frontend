import { useParams } from 'react-router-dom';
import KakaoRedirect from './components/KakaoRedirect';
import NaverRedirect from './components/NaverRedirect';
import GoogleRedirect from './components/GoogleRedirect';

const Redirect = () => {
  const { social } = useParams();

  const REDIRECT_PAGE: { [key: string]: JSX.Element } = {
    kakao: <KakaoRedirect />,
    naver: <NaverRedirect />,
    google: <GoogleRedirect />,
  };

  if (!social) return <div>undefined social login attempt</div>;
  else return REDIRECT_PAGE[social as string];
};

export default Redirect;
