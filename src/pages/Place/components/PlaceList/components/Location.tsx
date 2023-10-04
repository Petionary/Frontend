import { ReactComponent as MapIcon } from '../../../../../assets/icon_map_sm.svg';

const Location = () => {
  return (
    <div className="flex mr-[2.87rem]">
      <MapIcon className="mr-[0.5rem]" />
      <button className="text-[1rem] text-primary font-[500] leading-[1.625rem] -tracking-[0.005rem]">
        서울 송파구 삼전동
      </button>
    </div>
  );
};

export default Location;
