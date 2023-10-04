import { data } from 'autoprefixer';
import useFetch from '../../hooks/useFetch';
import MissingAnnounceContainer from './components/MissingAnnounceContainer';
import RecommendationContainer from './components/RecommendationContainer';
import WelcomeContainer from './components/WelcomeContainer';

const Home = () => {
  const fetch = useFetch('/posts');

  fetch.then(data => console.log(data.data));

  return (
    <main className="scroll-smooth snap-mandatory snap-y h-screen overflow-scroll">
      <WelcomeContainer />
      <RecommendationContainer />
      {/* place recommendation */}
      {/* title */}
      {/* placeList */}
      {/* placeCard */}
      <MissingAnnounceContainer />
      {/* missing announce */}
      {/* title */}
      {/* missing list */}
      {/* missing card */}
    </main>
  );
};

export default Home;
