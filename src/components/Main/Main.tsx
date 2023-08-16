import React from 'react';
import styles from './Main.module.scss';
import TaskInput from '../TaskInput/TaskInput';
import TodoList from '../TodoList/TodoList';

const Main: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <TaskInput />
      <TodoList />
    </main>
  );
};

export default Main;
