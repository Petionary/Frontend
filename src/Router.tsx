import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Places from './pages/Places';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/place" element={<Places />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
