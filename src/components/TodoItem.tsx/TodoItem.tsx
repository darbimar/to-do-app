import React from 'react';
import { ITodoItem } from '../../types/ITodoItem';
import Input from '../Input/Input';
import styles from './TodoItem.module.scss';
import Button from '../Button/Button';
import bin from './../../assets/bin.svg';
import pen from './../../assets/pen.svg';

const TodoItem: React.FC<ITodoItem> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <Input type="checkbox" id="todo" />
      <label htmlFor="todo">{title}</label>
      <Button>
        <img src={pen} alt="Edit task" />
      </Button>
      <Button>
        <img src={bin} alt="Delete task" />
      </Button>
    </div>
  );
};

export default TodoItem;
