import GoogleLogin from './components/GoogleLogin';
import KakaoLogin from './components/KakaoLogin';
import NaverLogin from './components/NaverLogin';

const SocialLogin = () => {
  return (
    <section className="flex flex-col">
      <KakaoLogin />
      <GoogleLogin />
      <NaverLogin />
    </section>
  );
};

export default SocialLogin;
