import { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import Filter from './components/Filter';
import PlaceList from './components/PlaceList';
import MapContainer from './components/MapContainer';
import { ReactComponent as Search } from '../../assets/Search.svg';
import { ReactComponent as MapIcon } from '../../assets/bx_map.svg';
import { ReactComponent as ListIcon } from '../../assets/fab.svg';
import ToolBar from './components/ToolBar';
import Recommend from './components/Recommend';

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
    <main className="relative flex flex-col items-center min-h-[90vh] mx-auto overflow-x-hidden">
      {!mapToggle && (
        <ToolBar
          filterToggle={filterToggle}
          handleFilterToggle={handleFilterToggle}
          params={params}
          handleParams={handleParams}
        />
      )}
      <Filter
        filterToggle={filterToggle}
        params={params}
        resetParams={resetParams}
        setParams={setParams}
        handleParams={handleParams}
      />

      {mapToggle ? (
        <MapContainer />
      ) : (
        <>
          <Recommend />
          <PlaceList />
        </>
      )}

      <button
        onClick={handleMapToggle}
        className="fixed bottom-[1.5rem] right-[20.25rem] bg-primary hover:bg-primary-dark rounded-full p-2 text-white text-xs font-bold z-20"
      >
        {mapToggle ? <ListIcon /> : <MapIcon />}
      </button>
    </main>
  );
};

export default Places;
