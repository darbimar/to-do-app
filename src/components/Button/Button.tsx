import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: any;
  handleCheck?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
