import { ComponentPropsWithoutRef } from 'react';
import RecommendedList from './components/RecommendedList';

interface RecommendationContainerProps extends ComponentPropsWithoutRef<'section'> {}

const RecommendationContainer = ({ ...rest }: RecommendationContainerProps) => {
  return (
    <>
      <RecommendedList type="best" />
      <RecommendedList type="new" />
    </>
  );
};

export default RecommendationContainer;
