import { Tmock } from '../..';
import Detail from './components/Detail';
import PlaceImage from './components/PlaceImage';
import Tools from './components/Tools';

interface DetailContainerProps {
  place: Tmock;
}

const DetailContainer = ({ place }: DetailContainerProps) => {
  return (
    <section className="w-[100vw] h-[23.75rem] py-[2.5rem] px-[16.7vw] flex justify-between items-center border-b-[1.25rem] border-gray-20">
      <PlaceImage images={place.images} />
      <div className="w-[33vw] h-[18.75rem] flex flex-col justify-between">
        <Detail />
        <Tools rate={place.rate} reviews={place.reviews} />
      </div>
    </section>
  );
};

export default DetailContainer;
