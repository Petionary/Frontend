import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoRedirect = () => {
  const nav = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    console.log(code);
    nav('/');
  }, []);
  return <div>{code}</div>;
};

export default KakaoRedirect;
