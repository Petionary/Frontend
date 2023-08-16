import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Places from './pages/Places';
import Header from './components/Header';
import Mypage from './pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/place" element={<Places />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
