import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: string | React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, isActive }) => {
  return (
    <button className={`${styles.button} ${isActive && styles.active}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
