import { useEffect } from 'react';
import SearchInput from '../SearchInput';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    kakao: any;
  }
}

const MapContainer = () => {
  const { kakao } = window;

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
      className="relative w-full z-10 h-[90vh] rounded-md overflow-hidden pt-[1.25rem] pb-[3rem] flex flex-col justify-between items-center"
    >
      <SearchInput />
      <div className="flex items-end z-10 h-[16em] w-full">
        <div className="w-[33.75rem] h-[13.75rem] mx-[0.75rem] bg-gray-20"></div>
        <div className="w-[33.75rem] h-[13.75rem] mx-[0.75rem] bg-gray-20"></div>
        <div className="w-[33.75rem] h-[13.75rem] mx-[0.75rem] bg-gray-20"></div>
        <div className="w-[33.75rem] h-[13.75rem] mx-[0.75rem] bg-gray-20"></div>
      </div>
    </section>
  );
};

export default MapContainer;
