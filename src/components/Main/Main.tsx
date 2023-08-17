import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { clearTasks } from '../../store/reducers/TodoSlice';
import TaskInput from '../TaskInput/TaskInput';
import TodoList from '../TodoList/TodoList';
import Button from '../Button/Button';
import styles from './Main.module.scss';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const clearCompletedTasks = () => {
    dispatch(clearTasks());
  };

  return (
    <main className={styles.wrapper}>
      <TaskInput />
      <TodoList />
      <Button onClick={clearCompletedTasks}>Clear all completed</Button>
    </main>
  );
};

export default Main;
