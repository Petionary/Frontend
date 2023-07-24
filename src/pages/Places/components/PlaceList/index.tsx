import Item from './components/Item';

const PlaceList = () => {
  return (
    <section className="my-3 w-full gap-y-5 gap-x-5 overflow-visible grid grid-cols-4 auto-rows-min sm:grid-cols-1 md:grid-cols-3 z-0 place-items-center place-content-start">
      <Item />
      <Item />
      <Item />
    </section>
  );
};

export default PlaceList;
