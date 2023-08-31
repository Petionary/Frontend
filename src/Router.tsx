import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Mypage from './pages/Mypage';
import Place from './pages/Place';
import PlaceDetail from './pages/PlaceDetail';
import { useSelector } from 'react-redux';
import { ReducerType } from './store';
import Register from './components/Register';
import { useEffect } from 'react';
import useScrollLock from './hooks/useScrollLock';

const Router = () => {
  const { login } = useSelector((state: ReducerType) => state);
  const { lock, unlock } = useScrollLock();

  useEffect(() => {
    if (login) lock();
    else unlock();
  }, [login]);

  return (
    <BrowserRouter>
      <Header />
      {login && <Register />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/place" element={<Place />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
