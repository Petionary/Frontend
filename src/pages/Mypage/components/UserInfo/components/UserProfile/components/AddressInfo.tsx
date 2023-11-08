import { ChangeEvent, FormEvent } from 'react';
import Input from '../../../../../../../components/Input';
import Button from '../../../../../../../components/Button';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { IUser } from '../../../../../../../utils/type';

interface AddressInfoProps {
  user: IUser;
  // eslint-disable-next-line no-unused-vars
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setInput: React.Dispatch<React.SetStateAction<IUser>>;
  editToggle: boolean;
}

const AddressInfo = ({ user, onChangeInput, setInput, editToggle }: AddressInfoProps) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data: Address) => {
    let address = data.address;
    let extraAddress = '';
    const postcode = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setInput({ ...user, address, postcode, detailAddress: '' });
  };

  const handleAddress = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    open({ onComplete: handleComplete });
  };
  return (
    <div className="h-[15rem] flex flex-col justify-between">
      <div className="flex items-end w-[20.875rem] justify-between">
        <Input
          name="postcode"
          label="주소"
          value={user.postcode}
          width="sm"
          placeholder="우편번호"
          isValid={user.postcode.length === 5}
          readOnly
          disabled={!editToggle}
        />
        <Button size="sm" cta onClick={handleAddress} disabled={!editToggle}>
          검색
        </Button>
      </div>
      <Input
        name="address"
        value={user.address}
        width="lg"
        placeholder="주소"
        isValid={true}
        readOnly
        disabled={!editToggle}
      />
      <Input
        name="detailAddress"
        value={user.detailAddress}
        width="lg"
        placeholder="상세주소"
        isValid={true}
        onChange={onChangeInput}
        disabled={!editToggle}
      />
    </div>
  );
};

export default AddressInfo;
