import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: any;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
