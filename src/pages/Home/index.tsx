import MissingAnnounceContainer from './components/MissingAnnounceContainer';
import RecommendationContainer from './components/RecommendationContainer';
import WelcomeContainer from './components/WelcomeContainer';

const Home = () => {
  return (
    <main className="snap-mandatory snap-y h-screen overflow-scroll">
      <WelcomeContainer />
      {/* welcome comtainer */}
      {/* welcome message */}
      {/* scroll button - 스크롤 시 1. 플레이스 추천 -> 2. 실종 신고 알림*/}

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
