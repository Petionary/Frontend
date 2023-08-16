import { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import Filter from './components/Filter';
import PlaceList from './components/PlaceList';
import MapContainer from './components/MapContainer';
import ToolBar from './components/ToolBar';
import Recommend from './components/Recommend';
import MapButton from './components/MapButton';

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
      <MapButton mapToggle={mapToggle} onClick={handleMapToggle} />
    </main>
  );
};

export default Places;
