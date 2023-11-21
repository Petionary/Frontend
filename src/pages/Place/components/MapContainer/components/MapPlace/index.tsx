import MapPlaceCard from './components/MapPlaceCard';
import MapPlaceList from './components/MapPlaceList';
import OpenToggle from './components/OpenToggle';

interface MapPlaceProps {
  mapPlaceToggle: boolean;
  handleMapPlaceToggle: () => void;
}

const MapPlace = ({ mapPlaceToggle, handleMapPlaceToggle }: MapPlaceProps) => {
  const open = mapPlaceToggle ? 'translate-y-0' : 'translate-y-[11.25rem]';
  return (
    <div
      className={`flex flex-col duration-500 justify-start z-10 h-[13.75em] w-full bg-background ${open}`}
    >
      <OpenToggle mapPlaceToggle={mapPlaceToggle} handleMapPlaceToggle={handleMapPlaceToggle} />
      <MapPlaceList>
        <MapPlaceCard />
      </MapPlaceList>
    </div>
  );
};

export default MapPlace;
