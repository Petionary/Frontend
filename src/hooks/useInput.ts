import { ChangeEvent, useState } from 'react';

const useInput = <T>(initialInput: T) => {
  const [input, setInput] = useState(initialInput);

  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const resetInput = () => {
    setInput(initialInput);
  };

  return { input, handleInputChange, resetInput, setInput };
};

export default useInput;
