import { ComponentPropsWithoutRef } from 'react';

interface RecommendationContainerProps extends ComponentPropsWithoutRef<'section'> {}

const RecommendationContainer = ({ ...rest }: RecommendationContainerProps) => {
  return (
    <section className="relative h-[100vh] snap-start snap-always" {...rest}>
      <div className="absolute top-0" />
      recommendation
      {/* place recommendation */}
      {/* title */}
      {/* placeList */}
      {/* placeCard */}
      <div className="absolute bottom-0" />
    </section>
  );
};

export default RecommendationContainer;
