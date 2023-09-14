import { useState } from 'react';
import useToggle from '../../../../hooks/useToggle';
import { IPet } from '../../../../utils/type';
import InfoTitle from '../InfoTitle';
import PetDetail from './components/PetDetail';
import PetList from './components/PetList';

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
        <PetDetail petId={petId} />
      ) : (
        <PetList pets={petList} handleDetailToggle={handleDetailToggle} setPetId={setPetId} />
      )}
    </section>
  );
};
export default PetInfo;
