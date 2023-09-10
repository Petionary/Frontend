import MissingAnnounceContainer from './components/MissingAnnounceContainer';
import RecommendationContainer from './components/RecommendationContainer';
import WelcomeContainer from './components/WelcomeContainer';

const Home = () => {
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
