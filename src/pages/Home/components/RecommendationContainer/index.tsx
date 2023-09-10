import RecommendedList from './components/RecommendedList';

const RecommendationContainer = () => {
  return (
    <>
      <RecommendedList type="best" />
      <RecommendedList type="new" />
    </>
  );
};

export default RecommendationContainer;
