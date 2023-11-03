import Input from '../../../../../../../components/Input';

interface PetBasicInfoProps {
  editToggle: boolean;
}

const PetBasicInfo = ({ editToggle }: PetBasicInfoProps) => {
  return (
    <fieldset className="flex w-[26.81rem] justify-between">
      <Input label="이름" value="" width="xs" disabled={!editToggle} />
      <Input label="생년월일" value="" width="sm" disabled={!editToggle} />
    </fieldset>
  );
};

export default PetBasicInfo;
