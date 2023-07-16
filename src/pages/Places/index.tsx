import Categories from './components/Categories';
import Options from './components/Options';
import PlaceItem from './components/PlaceItem';

const Places = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-[90vh] mx-auto py-2 px-10">
      <section className="w-full h-[3.5rem] px-5 flex justify-between md:flex-col sm:flex-col sm:h-[5rem] bg-[#fff]">
        <Categories />
        <Options />
      </section>
      <section className="absolute text-center w-full -z-10">sorttools</section>
      <section className="my-5 h-[35rem] gap-3 grid grid-cols-5 auto-rows-min overflow-y-scroll sm:grid-cols-1">
        <PlaceItem />
        <PlaceItem />
      </section>
    </main>
  );
};

export default Places;
