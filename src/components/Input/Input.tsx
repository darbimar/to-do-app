import React, { ChangeEvent, FocusEvent } from 'react';

type InputProps = {
  className?: string;
  type: 'text' | 'checkbox';
  id?: string;
  value?: string | number | undefined;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return <input {...props}></input>;
};

export default Input;
