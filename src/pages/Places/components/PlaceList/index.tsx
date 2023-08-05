import Item from './components/Item';

const PlaceList = () => {
  return (
    <section className="px-[5rem] py-5 -my-[12.5rem] w-full gap-y-[3rem] gap-x-5 grid grid-cols-3 auto-rows-min sm:grid-cols-1 md:grid-cols-2 z-0 place-items-center place-content-start sm:px-[2rem]">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </section>
  );
};

export default PlaceList;
