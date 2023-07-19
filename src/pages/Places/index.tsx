import { ChangeEvent, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import Filter from './components/Filter';
import PlaceList from './components/PlaceList';
import Toggles from './components/Toggles';

const placeParam = {
  search: '',
  region: '',
  district: '',
  category: '',
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
    <main className="flex flex-col items-center min-h-[90vh] mx-auto py-2 px-10 overflow-x-hidden">
      <Toggles filterToggle={filterToggle} handleFilterToggle={handleFilterToggle} />
      <Filter
        filterToggle={filterToggle}
        params={params}
        resetParams={resetParams}
        setParams={setParams}
        handleParams={handleParams}
      />
      <PlaceList />
      <button
        onClick={handleMapToggle}
        className="fixed bottom-10 bg-primary hover:bg-primary-dark rounded-full h-[2.5rem] min-w-[9rem] px-10 text-white text-xs font-bold"
      >
        {mapToggle ? '목록' : '지도로 보기'}
      </button>
    </main>
  );
};

export default Places;
