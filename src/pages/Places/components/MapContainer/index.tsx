import { useEffect } from 'react';

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

    // eslint-disable-next-line no-unused-vars
    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    // zoom level control 추가
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // mousedown event가 발생했을 경우에만 드래그 가능
    kakao.maps.event.addListener(map, 'mousedown', () => map.setDraggable(true));
  }, []);

  return <section id="map" className="w-full h-[82vh] rounded-md overflow-hidden" />;
};

export default MapContainer;
