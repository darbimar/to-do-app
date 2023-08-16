import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './TaskInput.module.scss';

const TaskInput: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <section className={styles.wrapper}>
      <Input
        className={styles.input}
        placeholder="New task"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button>Add</Button>
    </section>
  );
};

export default TaskInput;
