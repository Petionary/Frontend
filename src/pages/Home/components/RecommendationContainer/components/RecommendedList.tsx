import { type } from 'os';
import RecommendedItem from './RecommendedItem';
import RecommendedTitle from './RecommendedTitle';

interface RecommendedListProps {
  type: 'best' | 'new';
}

const RecommendedList = ({ type }: RecommendedListProps) => {
  return (
    <section className="flex flex-col justify-center h-[calc(100vh-100px)] w-[81.24rem] mx-auto snap-start snap-always">
      <RecommendedTitle type={type} />
      <div className="flex justify-between mt-10">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
      </div>
    </section>
  );
};

export default RecommendedList;
