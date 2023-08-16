import React, { ChangeEvent } from 'react';

type InputProps = {
  className: string;
  type: 'text' | 'checkbox';
  value: string | number | undefined;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return <input {...props}></input>;
};

export default Input;