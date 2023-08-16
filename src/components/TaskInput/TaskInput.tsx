import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './TaskInput.module.scss';
import { addTask } from '../../store/reducers/TodoSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ITodoItem } from '../../types/ITodoItem';

const TaskInput: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todoReducer);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (value.trim() !== '') {
      const task: ITodoItem = {
        userId: 1,
        id: todos.length + 1,
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
      <Button onClick={handleAddTask}>Add</Button>
    </section>
  );
};

export default TaskInput;
