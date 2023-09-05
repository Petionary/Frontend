import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Mypage from './pages/Mypage';
import Place from './pages/Place';
import PlaceDetail from './pages/PlaceDetail';
import Auth from './pages/Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/place" element={<Place />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
