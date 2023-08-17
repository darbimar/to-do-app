import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchTodos } from '../../store/reducers/ActionCreators';
import TodoItem from '../TodoItem.tsx/TodoItem';
import Filter from '../Filter/Filter';

const TodoList: React.FC = () => {
  const { todos } = useAppSelector((state) => state.todoReducer);
  const [filter, setFilter] = useState('All');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const filterTodos = (filter: string) => {
    if (filter === 'Active') {
      return todos.filter((todo) => todo.completed === false);
    }
    if (filter === 'Completed') {
      return todos.filter((todo) => todo.completed === true);
    }
    return todos;
  };

  const filteredTodos = filterTodos(filter);

  return (
    <section className={styles.list}>
      <Filter filter={filter} setFilter={setFilter} />
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </section>
  );
};

export default TodoList;
