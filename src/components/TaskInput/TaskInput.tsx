import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './TaskInput.module.scss';
import { addTask } from '../../store/reducers/TodoSlice';
import { useAppDispatch } from '../../hooks/redux';
import { ITodoItem } from '../../types/ITodoItem';

const TaskInput: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (value.trim() !== '') {
      const task: ITodoItem = {
        userId: 1,
        id: Math.floor(Math.random() * 900) + 100,
        title: value,
        completed: false,
      };
      dispatch(addTask(task));
      setValue('');
    }
  };

  return (
    <section className={styles.wrapper}>
      <Input
        className={styles.input}
        placeholder="New task"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button isActive onClick={handleAddTask}>
        Add
      </Button>
    </section>
  );
};

export default TaskInput;
