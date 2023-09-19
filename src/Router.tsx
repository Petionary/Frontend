import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Mypage from './pages/Mypage';
import Place from './pages/Place';
import PlaceDetail from './pages/PlaceDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Redirect from './pages/Redirect';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from './store';
import Register from './components/Register';
import { useCallback, useEffect, useState } from 'react';
import useScrollLock from './hooks/useScrollLock';
import { debounce, throttle } from 'lodash';
import { handleViewport } from './store/slices/viewportSlice';

const Router = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { login, viewport } = useSelector((state: ReducerType) => state);
  const { lock, unlock } = useScrollLock();

  const handleSize = throttle(() => {
    dispatch(handleViewport());
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  useEffect(() => {
    if (login) lock();
    else unlock();
  }, [login]);

  return (
    <BrowserRouter>
      {viewport.width > 815 && <Header />}
      <div>{`w: ${viewport.width} h: ${viewport.height}`}</div>
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
  );
};

export default Router;
