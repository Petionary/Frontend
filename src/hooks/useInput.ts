import { ChangeEvent, useState } from 'react';

const useInput = <T>(initialInput: T) => {
  const [input, setInput] = useState(initialInput);

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const resetInput = () => {
    setInput(initialInput);
  };

  return [input, handleInput, resetInput];
};

export default useInput;
