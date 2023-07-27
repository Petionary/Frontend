import { ChangeEvent } from 'react';
import { TUser } from '../../..';
import Input from '../../../../../../components/Input';

interface ContactProps {
  editToggle: boolean;
  user: TUser;
  // eslint-disable-next-line no-unused-vars
  handleUserInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Contact = ({ editToggle, user }: ContactProps) => {
  return (
    <div className="flex justify-between items-center sm:flex-col w-full">
      <div className="w-[45%] md:w-full sm:w-full">
        <Input
          width="full"
          margin="my-1"
          disabled={!editToggle}
          value={user.email}
          label="이메일"
          type="email"
        />
      </div>
      <div className="w-[45%] md:w-full sm:w-full">
        <Input
          width="full"
          margin="my-2"
          disabled={!editToggle}
          value={user.phoneNumber}
          label="전화번호"
        />
      </div>
    </div>
  );
};

export default Contact;
