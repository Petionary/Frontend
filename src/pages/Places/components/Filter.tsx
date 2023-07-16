interface Props {
  filterToggle: boolean;
}

const Filter = ({ filterToggle }: Props) => {
  const open = filterToggle ? 'lg:-translate-x-[15%] -translate-x-0' : 'translate-x-[110%]';
  return (
    <aside
      className={`duration-500 w-[25rem] p-5 sm:w-full h-[30rem] bg-primary right-0 absolute translate-y-10 ${open} z-10`}
    >
      filter
    </aside>
  );
};

export default Filter;
