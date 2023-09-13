import { IPet } from '../../../../utils/type';
import InfoTitle from '../InfoTitle';
import PetList from './components/PetList';

interface PetInfoProps {
  petList: IPet[];
}

const PetInfo = ({ petList }: PetInfoProps) => {
  return (
    <section className="px-[5.44rem] pt-[3.7vh] overflow-scroll">
      <InfoTitle title="My Pet" />
      <PetList pets={petList} />
    </section>
  );
};
export default PetInfo;
