import { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import PlaceList from './components/PlaceList';
import MapContainer from './components/MapContainer';
import ToolBar from './components/ToolBar';
import MapButton from './components/MapButton';
import Filter from './components/Filter';

const placeParam = {
  search: '',
  region: '',
  district: '',
  category: '',
  sort: 'distance',
  direction: 'asc',
};

export type TPlaceParam = typeof placeParam;

const Place = () => {
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
    <main className="relative flex bg-background flex-col h-screen mx-auto overflow-scroll">
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
      {mapToggle ? <MapContainer /> : <PlaceList params={params} handleParams={handleParams} />}
      <MapButton mapToggle={mapToggle} onClick={handleMapToggle} />
    </main>
  );
};

export default Place;
