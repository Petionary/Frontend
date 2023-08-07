import Item from './components/Item';

const PlaceList = () => {
  return (
    <section className="px-[20rem] py-5 w-full gap-y-[3rem] bg-[#F8F8FA] gap-x-5 grid grid-cols-3 auto-rows-min sm:grid-cols-1 md:grid-cols-2 z-0 place-items-center place-content-start sm:px-[2rem]">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </section>
  );
};

export default PlaceList;
