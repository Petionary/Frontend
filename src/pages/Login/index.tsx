import AuthTitle from './components/AuthTitle';
import SocialLogin from './components/SocialLogin';

const Login = () => {
  return (
    <main className="bg-background h-[calc(100vh-100px)] flex flex-col items-center pt-[10vh]">
      <AuthTitle />
      <SocialLogin />
    </main>
  );
};

export default Login;
