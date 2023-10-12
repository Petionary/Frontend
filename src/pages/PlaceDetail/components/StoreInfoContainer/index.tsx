import { IPlace } from '../../../../utils/type';
import Announcement from './components/Announcement';
import BasicInfo from './components/BasicInfo';
import WorkingTime from './components/WorkingTime';

interface StoreInfoContainerProps {
  place?: IPlace;
}

const StoreInfoContainer = ({ place }: StoreInfoContainerProps) => {
  return (
    <section className="w-full px-[16.67vw]">
      <BasicInfo />
      <WorkingTime />
      <Announcement />
    </section>
  );
};

export default StoreInfoContainer;
