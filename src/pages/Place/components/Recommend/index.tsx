import RecommendList from './components/RecommendList';
import RecommendTitle from './components/RecommendTitle';

const Recommend = () => {
  return (
    <section className="relative w-full z-5 sm:hidden">
      <RecommendTitle />
      <RecommendList />
    </section>
  );
};

export default Recommend;
