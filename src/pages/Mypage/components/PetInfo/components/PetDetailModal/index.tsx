import ProfileImg from '../../../../../../components/ProfileImg';
import PetDetailButtons from './components/PetDetailButtons';
import PetDetailForm from './components/PetDetailForm';

interface PetDetailModalProps {
  petId?: number;
}

const PetDetailModal = ({ petId }: PetDetailModalProps) => {
  return (
    <section className="w-[54.125rem] mt-[5.25rem] flex items-start justify-between p-[2.5rem] bg-white">
      <ProfileImg imgSrc="../../../../../assets/img_pet_default.svg" editToggle={false} />
      <PetDetailForm />
    </section>
  );
};

export default PetDetailModal;
