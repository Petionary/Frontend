import Input from '../../../../../../../components/Input';

const PetBasicInfo = () => {
  return (
    <fieldset className="flex w-[26.81rem] justify-between">
      <Input label="이름" value="" width="xs" />
      <Input label="생년월일" value="" width="sm" />
    </fieldset>
  );
};

export default PetBasicInfo;
