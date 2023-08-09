import { ReactNode } from 'react';
import { ReactComponent as Next } from '../../../../../../../assets/NextArrow.svg';

interface MapPlaceListProps {
  children: ReactNode;
}

const MapPlaceList = ({ children }: MapPlaceListProps) => {
  return (
    <div className="relative flex overflow-scroll">
      <span className="bg-gray-60 w-[3.75rem] h-[3.75rem] left-[1.5rem] rounded-full flex justify-center items-center fixed top-[6.25rem] opacity-50">
        <Next />
      </span>
      {children}
      <span className="bg-gray-60 w-[3.75rem] h-[3.75rem] fixed rounded-full flex justify-center items-center right-[1.5rem] top-[6.25rem] opacity-50 rotate-180">
        <Next />
      </span>
    </div>
  );
};

export default MapPlaceList;
