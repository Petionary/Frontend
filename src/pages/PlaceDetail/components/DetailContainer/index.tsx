import { Tmock } from '../..';
import Detail from './components/Detail';
import PlaceImage from './components/PlaceImage';
import Tools from './components/Tools';

interface DetailContainerProps {
  place: Tmock;
}

const DetailContainer = ({ place }: DetailContainerProps) => {
  return (
    <section className="w-[80rem] h-[23.75rem] py-[2.5rem] flex justify-between items-center">
      <PlaceImage images={place.images} />
      <div className="w-[39.5rem] h-[18.75rem] flex flex-col justify-between">
        <Detail />
        <Tools rate={place.rate} reviews={place.reviews} />
      </div>
    </section>
  );
};

export default DetailContainer;
