import { useNavigate } from 'react-router-dom';
import GoogleLogin from './components/GoogleLogin';
import KakaoLogin from './components/KakaoLogin';
import NaverLogin from './components/NaverLogin';

const SocialLogin = () => {
  const nav = useNavigate();
  const KAKAO_KEY = import.meta.env.VITE_KAKAO_API_KEY;
  const KAKAO_REDIRECT = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${KAKAO_REDIRECT}&response_type=code`;
  };

  return (
    <section className="flex flex-col">
      <KakaoLogin onClick={handleKakaoLogin} />
      <GoogleLogin onClick={() => nav('/login/google')} />
      <NaverLogin onClick={() => nav('login/naver')} />
    </section>
  );
};

export default SocialLogin;
