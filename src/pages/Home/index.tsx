import { useMutation } from 'react-query';
import ApiService from '../../service/api';
import MissingAnnounceContainer from './components/MissingAnnounceContainer';
import RecommendationContainer from './components/RecommendationContainer';
import WelcomeContainer from './components/WelcomeContainer';
import usePost from '../../hooks/usePost';

const Home = () => {
  return (
    <main className="scroll-smooth snap-mandatory snap-y h-screen overflow-scroll">
      <WelcomeContainer />
      <RecommendationContainer />
      <MissingAnnounceContainer />
    </main>
  );
};

export default Home;
