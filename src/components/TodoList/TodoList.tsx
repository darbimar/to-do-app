import React, { useEffect } from 'react';
import styles from './TodoList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchTodos } from '../../store/reducers/ActionCreators';
import TodoItem from '../TodoItem.tsx/TodoItem';

const TodoList: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todoReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <section className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </section>
  );
};

export default TodoList;
