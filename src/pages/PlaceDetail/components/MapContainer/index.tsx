import { useEffect } from 'react';
import InfoTitle from '../InfoTitle';

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
      // 좌료를 prop으로 전달받아 center 지정해주기
      center: new kakao.maps.LatLng(37.420152, 127.126665),
      zoomable: false,
      draggable: false,
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    kakao.maps.event.addListener(map, 'mousedown', () => map.setDraggable(true));
  }, []);

  return (
    <section className="w-full px-[16.67vw] mt-[3.75rem]">
      <InfoTitle title="위치" />
      <section id="map" className="h-[14.375rem]" />
    </section>
  );
};

export default MapContainer;
