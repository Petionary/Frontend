import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
type UseToggle = (initialToggle: boolean) => [toggle: boolean, handleToggle: () => void];

const useToggle: UseToggle = (initialToggle = false) => {
  const [toggle, setToggle] = useState(initialToggle);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, handleToggle];
};

export default useToggle;
