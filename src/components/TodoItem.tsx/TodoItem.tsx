import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ITodoItem } from '../../types/ITodoItem';
import Input from '../Input/Input';
import Button from '../Button/Button';
import bin from './../../assets/bin.svg';
import pen from './../../assets/pen.svg';
import styles from './TodoItem.module.scss';
import { editTask } from '../../store/reducers/TodoSlice';

const TodoItem: React.FC<ITodoItem> = ({ id, title }) => {
  const [taskValue, setTaskValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const handleEditTask = (id: number) => {
    if (title.trim() !== '') {
      dispatch(editTask({ id, value: taskValue }));
    }
    setIsEditing(false);
  };

  return (
    <div className={styles.wrapper}>
      <Input type="checkbox" id={title} />
      {isEditing ? (
        <Input
          type="text"
          value={taskValue}
          onChange={(event) => setTaskValue(event.target.value)}
          onBlur={() => handleEditTask(id)}
        />
      ) : (
        <label htmlFor={title}>{taskValue}</label>
      )}
      <Button onClick={() => setIsEditing(true)}>
        <img src={pen} alt="Edit task" />
      </Button>
      <Button onClick={() => console.log('delete')}>
        <img src={bin} alt="Delete task" />
      </Button>
    </div>
  );
};

export default TodoItem;
