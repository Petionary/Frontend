import { ChangeEvent } from 'react';
import Input from '../../../../../../../components/Input';

interface BasicInfoProps {
  nickname: string;
  contact: string;
  // eslint-disable-next-line no-unused-vars
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  editToggle: boolean;
}

const BasicInfo = ({ nickname, contact, onChangeInput, editToggle }: BasicInfoProps) => {
  return (
    <div className="flex w-full justify-between">
      <Input
        name="nickname"
        width="sm"
        label="별명"
        value={nickname}
        placeholder="별명"
        onChange={onChangeInput}
        isValid={nickname.length > 0}
        disabled={!editToggle}
      />
      <Input
        name="contact"
        width="sm"
        label="전화번호"
        value={contact}
        placeholder="전화번호"
        onChange={onChangeInput}
        isValid={contact.length > 11 && contact.length < 14}
        disabled={!editToggle}
      />
    </div>
  );
};

export default BasicInfo;
