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
    <main className="flex flex-col justify-evenly min-h-[90vh]">
      <Menus content={input.content} handleMenu={handleInputChange} />
      <section className="lg:w-[90%] w-full mx-auto h-[80vh] bg-secondary">
        {CONTENTS[input.content]}
      </section>
    </main>
  );
};

export default Mypage;
