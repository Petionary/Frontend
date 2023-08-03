import { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import Filter from './components/Filter';
import PlaceList from './components/PlaceList';
import Toggles from './components/Toggles';
import MapContainer from './components/MapContainer';
import { ReactComponent as Search } from '../../assets/Search.svg';

const placeParam = {
  search: '',
  region: '',
  district: '',
  category: '',
  sort: 'distance',
  direction: 'asc',
};

export type TPlaceParam = typeof placeParam;

const Places = () => {
  const [filterToggle, handleFilterToggle] = useToggle();
  const [mapToggle, handleMapToggle] = useToggle();

  const {
    input: params,
    handleInputChange: handleParams,
    resetInput: resetParams,
    setInput: setParams,
  } = useInput(placeParam);

  useEffect(() => {
    setParams({ ...params, district: '' });
  }, [params.region]);

  return (
    <main className="flex flex-col items-center min-h-[90vh] mx-auto py-2 overflow-x-hidden">
      <Toggles
        filterToggle={filterToggle}
        handleFilterToggle={handleFilterToggle}
        params={params}
        handleParams={handleParams}
      />
      <Filter
        filterToggle={filterToggle}
        params={params}
        resetParams={resetParams}
        setParams={setParams}
        handleParams={handleParams}
      />
      <div className="py-5 flex flex-col items-center w-full h-[34rem] bg-primary">
        <div className="flex w-[35rem] justify-between">
          <input
            type="text"
            className="h-[3.5rem] w-[28.75rem] rounded-full bg-gray-20 placeholder:text-sm px-7"
            placeholder="내 반려동물과 가고싶은 장소를 검색해보세요."
          />
          <div className="h-[3.5rem] w-[3.5rem] bg-gray-20 rounded-full flex items-center justify-center">
            <Search className="stroke-primary" />
          </div>
        </div>
        {/* <div className="w-full">
          <div>BEST PLACE</div>
          <div>당신과 당신의 반려동물이 좋아할 만한 곳으로 선정했어요.</div>
        </div> */}
      </div>
      {mapToggle ? <MapContainer /> : <PlaceList />}
      <button
        onClick={handleMapToggle}
        className="fixed bottom-10 bg-primary hover:bg-primary-dark rounded-full h-[2.5rem] min-w-[9rem] px-10 text-white text-xs font-bold z-20"
      >
        {mapToggle ? '목록' : '지도로 보기'}
      </button>
    </main>
  );
};

export default Places;
