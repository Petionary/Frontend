import useInput from '../../hooks/useInput';
import Menus from './components/Menus';
import PetPage from './components/PetPage';
import UserHistory from './components/UserHistory';
import UserPage from './components/UserPage';

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
    <main className="p-5 flex w-full min-h-[90vh] sm:flex-col mx-auto">
      <Menus content={input.content} handleMenu={handleInputChange} />
      <section className="w-[60vw] py-3 px-10 sm:w-full mx-auto flex flex-col items-center relative">
        {CONTENTS[input.content]}
      </section>
    </main>
  );
};

export default Mypage;
