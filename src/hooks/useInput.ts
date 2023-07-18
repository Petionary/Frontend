import { ChangeEvent, useState } from 'react';

const useInput = <T>(initialInput: T) => {
  const [input, setInput] = useState(initialInput);

  // eslint-disable-next-line no-unused-vars
  const handleInput: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const resetInput: () => void = () => {
    setInput(initialInput);
  };

  return [input, handleInput, resetInput];
};

export default useInput;
