import InfoTitle from '../InfoTitle';
import Address from './components/Address';
import Contact from './components/Contact';
import { TUser } from '../../index';
import { ChangeEvent } from 'react';

interface ContactInfoProps {
  editToggle: boolean;
  user: TUser;
  // eslint-disable-next-line no-unused-vars
  handleUserInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  setUserInput: React.Dispatch<React.SetStateAction<TUser>>;
}

const ContactInfo = ({
  editToggle,
  user,
  handleUserInputChange,
  setUserInput,
}: ContactInfoProps) => {
  return (
    <>
      <InfoTitle type="contact" />
      <div className="my-5 w-full">
        <Contact
          editToggle={editToggle}
          user={user}
          handleUserInputChange={handleUserInputChange}
        />
        <Address
          editToggle={editToggle}
          user={user}
          handleUserInputChange={handleUserInputChange}
          setUserInput={setUserInput}
        />
      </div>
    </>
  );
};

export default ContactInfo;
