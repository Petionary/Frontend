import Item from './components/Item';

const PlaceList = () => {
  return (
    <section className=" py-[3rem] w-[81.26rem] gap-y-[3rem] gap-x-[3.12rem] grid grid-cols-3 auto-rows-min sm:grid-cols-1 md:grid-cols-2 z-0 place-items-center place-content-start sm:px-[1rem]">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </section>
  );
};

export default PlaceList;
