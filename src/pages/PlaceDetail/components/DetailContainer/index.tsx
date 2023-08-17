import Detail from './components/Detail';
import PlaceImage from './components/PlaceImage';

const DetailContainer = () => {
  return (
    <section className="w-[80rem] h-[23.75rem] py-[2.5rem] flex justify-between items-center">
      <PlaceImage alt="place" />
      <div className="w-[39.5rem] h-[18.75rem] flex flex-col justify-between">
        <Detail />
      </div>
    </section>
  );
};

export default DetailContainer;
