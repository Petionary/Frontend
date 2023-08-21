import { ComponentPropsWithoutRef } from 'react';
import { ReactComponent as MapIcon } from '../../../../assets/bx_map.svg';
import { ReactComponent as ListIcon } from '../../../../assets/List.svg';

interface MapButtonProps extends ComponentPropsWithoutRef<'button'> {
  mapToggle: boolean;
}

const MapButton = ({ mapToggle, ...rest }: MapButtonProps) => {
  return (
    <button
      className="fixed border-[0.13rem] border-gradient-to-r from-primary bottom-[1.5rem] right-[20.25rem] bg-primary hover:bg-primary-dark rounded-full w-[6.25rem] h-[6.25rem] text-white text-xs font-bold z-20 sm:right-[1.5rem] sm:w-[3.75rem] sm:h-[3.75rem]"
      {...rest}
    >
      {mapToggle ? (
        <ListIcon className="mx-auto  sm:w-[2.25rem] sm:h-[2.25rem]" />
      ) : (
        <MapIcon className="mx-auto  sm:w-[2.25rem] sm:h-[2.25rem]" />
      )}
    </button>
  );
};

export default MapButton;
