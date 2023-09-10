import { useNavigate } from 'react-router-dom';
import GoogleLogin from './components/GoogleLogin';
import KakaoLogin from './components/KakaoLogin';
import NaverLogin from './components/NaverLogin';

const SocialLogin = () => {
  const nav = useNavigate();

  return (
    <section className="flex flex-col">
      <KakaoLogin onClick={() => nav('/login/kakao')} />
      <GoogleLogin onClick={() => nav('/login/google')} />
      <NaverLogin onClick={() => nav('login/naver')} />
    </section>
  );
};

export default SocialLogin;
