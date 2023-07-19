import Dropdown from '../../../../../components/Dropdown';

const AddressFilter = () => {
  return (
    <div className="text-xs flex flex-col">
      <div className="flex justify-between px-2">
        <span className="text-text">주소검색</span>
        <span className="text-light cursor-pointer hover:font-bold">초기화</span>
      </div>
      <div className="flex m-2">
        <Dropdown>
          <option>시도</option>
        </Dropdown>
        <Dropdown>
          <option>시군구</option>
        </Dropdown>
      </div>
    </div>
  );
};

export default AddressFilter;
