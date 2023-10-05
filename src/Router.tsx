import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Mypage from './pages/Mypage';
import Place from './pages/Place';
import PlaceDetail from './pages/PlaceDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Redirect from './pages/Redirect';
import { useSelector } from 'react-redux';
import { ReducerType } from './store';
import Register from './components/Register';
import { useEffect } from 'react';
import useScrollLock from './hooks/useScrollLock';
import { QueryClient, QueryClientProvider } from 'react-query';

const Router = () => {
  const queryClient = new QueryClient();
  const { login } = useSelector((state: ReducerType) => state);
  const { lock, unlock } = useScrollLock();

  useEffect(() => {
    if (login) lock();
    else unlock();
  }, [login]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        {login && <Register />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/:social" element={<Redirect />} />
          <Route path="/place" element={<Place />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
          <Route path="/mypage/:menu" element={<Mypage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
