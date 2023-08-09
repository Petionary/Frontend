import { useEffect } from 'react';
import SearchInput from '../SearchInput';

import useToggle from '../../../../hooks/useToggle';
import MapPlace from './components/MapPlace';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    kakao: any;
  }
}

const MapContainer = () => {
  const { kakao } = window;
  const [mapPlaceToggle, handleMapPlaceToggle] = useToggle();

  useEffect(() => {
    let container = document.getElementById('map');

    let options = {
      center: new kakao.maps.LatLng(37.420152, 127.126665),
      zoomable: false,
      draggable: false,
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    // zoom level control 추가
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // mousedown event가 발생했을 경우에만 드래그 가능
    kakao.maps.event.addListener(map, 'mousedown', () => map.setDraggable(true));
  }, []);

  return (
    <section
      id="map"
      className="relative w-full z-10 h-[90vh] rounded-md overflow-hidden pt-[1.25rem] flex flex-col justify-between items-center duration-500"
    >
      <SearchInput />
      <MapPlace mapPlaceToggle={mapPlaceToggle} handleMapPlaceToggle={handleMapPlaceToggle} />
    </section>
  );
};

export default MapContainer;
