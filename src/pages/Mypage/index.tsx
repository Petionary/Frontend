import useInput from '../../hooks/useInput';
import Menus from './components/Menus';
import PetPage from './components/PetPage';
import UserHistory from './components/UserHistory';
import UserPage from './UserPage';

const Mypage = () => {
  const { input, handleInputChange } = useInput<{ content: 'user' | 'pet' | 'history' }>({
    content: 'user',
  });

  const CONTENTS: { [key: string]: JSX.Element } = {
    pet: <PetPage />,
    user: <UserPage />,
    history: <UserHistory />,
  };

  return (
    <main className="p-5 flex w-full justify-between min-h-[90vh] sm:flex-col mx-auto">
      <Menus content={input.content} handleMenu={handleInputChange} />
      <section className="w-full py-3 px-10">{CONTENTS[input.content]}</section>
    </main>
  );
};

export default Mypage;
