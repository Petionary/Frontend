import { ReactComponent as Arrow } from '../../../../../../../assets/Arrow.svg';

interface OpenToggleProps {
  mapPlaceToggle: boolean;
  handleMapPlaceToggle: () => void;
}

const OpenToggle = ({ mapPlaceToggle, handleMapPlaceToggle }: OpenToggleProps) => {
  return (
    <span
      className={`h-[2.5rem] py-[0.875rem] duration-500 cursor-pointer mx-auto ${
        mapPlaceToggle ? 'rotate-180' : 'rotate-0'
      }`}
      onClick={handleMapPlaceToggle}
    >
      <Arrow />
    </span>
  );
};
export default OpenToggle;
