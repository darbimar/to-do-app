import React, { useEffect } from 'react';
import styles from './TodoList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchTodos } from '../../store/reducers/ActionCreators';

const TodoList: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todoReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <section className={styles.list}>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </section>
  );
};

export default TodoList;
