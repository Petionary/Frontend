import { useState } from 'react';
import useToggle from '../../../../hooks/useToggle';
import { IPet } from '../../../../utils/type';
import InfoTitle from '../InfoTitle';
import PetList from './components/PetList';
import PetDetailModal from './components/PetDetailModal';

interface PetInfoProps {
  petList: IPet[];
}

const PetInfo = ({ petList }: PetInfoProps) => {
  const [petId, setPetId] = useState<number | undefined>();
  const [detailToggle, handleDetailToggle] = useToggle();

  return (
    <section className="px-[5.44rem] pt-[3.7vh] overflow-scroll">
      <InfoTitle title="My Pet" />
      {detailToggle ? (
        <PetDetailModal petId={petId} handleDetailToggle={handleDetailToggle} />
      ) : (
        <PetList pets={petList} handleDetailToggle={handleDetailToggle} setPetId={setPetId} />
      )}
    </section>
  );
};
export default PetInfo;
