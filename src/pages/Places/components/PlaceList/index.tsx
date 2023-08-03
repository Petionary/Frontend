import Item from './components/Item';

const PlaceList = () => {
  return (
    <section className="px-[5rem] -my-[11.25rem] w-full gap-y-[10rem] gap-x-5 grid grid-cols-3 auto-rows-min sm:grid-cols-1 md:grid-cols-3 z-0 place-items-center place-content-start">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </section>
  );
};

export default PlaceList;
