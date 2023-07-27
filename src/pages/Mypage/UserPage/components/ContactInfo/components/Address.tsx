import { Address as TAddress, useDaumPostcodePopup } from 'react-daum-postcode';
import Button from '../../../../../../components/Button';
import Input from '../../../../../../components/Input';
import { TUser } from '../../..';
import { ChangeEvent } from 'react';

interface AddressProps {
  editToggle: boolean;
  user: TUser;
  // eslint-disable-next-line no-unused-vars
  handleUserInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  setUserInput: React.Dispatch<React.SetStateAction<TUser>>;
}

const Address = ({ editToggle, user, setUserInput, handleUserInputChange }: AddressProps) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data: TAddress) => {
    let address = data.address;
    let extraAddress = '';
    const postCode = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setUserInput({ ...user, address: address, postcode: postCode });

    console.log(address, postCode, data);
  };

  const handleOpen = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <div>
      <div className="flex justify-between items-end w-[22rem] md:w-full sm:w-full">
        <Input
          width="sm"
          label="주소"
          margin="my-1"
          name="postcode"
          disabled
          value={user.postcode}
        />
        <Button
          width="full"
          margin="my-2 ml-3"
          color="secondary"
          rounded={false}
          disabled={!editToggle}
          onClick={handleOpen}
        >
          검색
        </Button>
      </div>
      <Input width="full" margin="my-2" name="address" disabled value={user.address} />
      <Input
        width="full"
        margin="my-2"
        disabled={!editToggle}
        name="detailAddress"
        value={user.detailAddress}
        onChange={handleUserInputChange}
      />
    </div>
  );
};

export default Address;
