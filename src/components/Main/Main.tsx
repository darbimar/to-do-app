import React from 'react';
import styles from './Main.module.scss';
import TaskInput from '../TaskInput/TaskInput';

const Main: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <TaskInput />
    </main>
  );
};

export default Main;
