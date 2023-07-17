import Input from '../../../components/Input/Input';
import Categories from './Categories';

interface Props {
  filterToggle: boolean;
}

const Filter = ({ filterToggle }: Props) => {
  const open = filterToggle ? 'lg:-translate-x-[12%] -translate-x-0' : 'translate-x-[110%]';
  return (
    <aside
      className={`flex flex-col justify-between duration-500 w-[25rem] rounded-lg border p-8 sm:w-full h-[30rem] bg-[#fff] shadow-lg right-0 absolute translate-y-10 ${open} z-10`}
    >
      <div>
        <span className="text-xs text-text">카테고리</span>
        <Categories />
      </div>
      <div>
        <span className="text-xs text-text">검색</span>
        <Input width="full" rounded />
      </div>
      <div>
        <span className="text-xs text-text">주소검색</span>
      </div>
    </aside>
  );
};

export default Filter;
