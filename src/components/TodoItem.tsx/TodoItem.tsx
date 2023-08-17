import React, { useState } from 'react';
import { editTask, removeTask, toggleTask } from '../../store/reducers/TodoSlice';
import { useAppDispatch } from '../../hooks/redux';
import { ITodoItem } from '../../types/ITodoItem';
import Input from '../Input/Input';
import Button from '../Button/Button';
import bin from './../../assets/bin.svg';
import pen from './../../assets/pen.svg';
import styles from './TodoItem.module.scss';

const TodoItem: React.FC<ITodoItem> = ({ id, title, completed }) => {
  const [taskValue, setTaskValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  let task = '';
  if (completed) {
    task = styles.completed;
  }

  const handleEditTask = (id: number) => {
    if (title.trim() !== '') {
      dispatch(editTask({ id, value: taskValue }));
    }
    setIsEditing(false);
  };

  const handleRemoveTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const handleEditCheckbox = (id: number, isCompleted: boolean) => {
    dispatch(toggleTask({ id, isCompleted }));
  };

  return (
    <div className={styles.wrapper}>
      <Input
        type="checkbox"
        id={title}
        onChange={() => handleEditCheckbox(id, completed)}
        checked={completed}
      />
      {isEditing ? (
        <Input
          type="text"
          value={taskValue}
          onChange={(event) => setTaskValue(event.target.value)}
          onBlur={() => handleEditTask(id)}
        />
      ) : (
        <label className={task} htmlFor={title}>
          {taskValue}
        </label>
      )}
      <Button onClick={() => setIsEditing(true)}>
        <img src={pen} alt="Edit task" />
      </Button>
      <Button onClick={() => handleRemoveTask(id)}>
        <img src={bin} alt="Delete task" />
      </Button>
    </div>
  );
};

export default TodoItem;
