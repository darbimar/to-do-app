import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchTodos } from '../../store/reducers/ActionCreators';
import TodoItem from '../TodoItem.tsx/TodoItem';
import Filter from '../Filter/Filter';
import Button from '../Button/Button';
import { clearTasks } from '../../store/reducers/TodoSlice';
import Spinner from '../Spinner/Spinner';

const TodoList: React.FC = () => {
  const { todos, status } = useAppSelector((state) => state.todoReducer);
  const [filter, setFilter] = useState('All');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  const clearCompletedTasks = () => {
    dispatch(clearTasks());
  };

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
      {status === 'loading' && <Spinner />}
      {status === 'succeeded' && filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      {status === 'failed' && <div>Произошла ошибка при загрузке данных</div>}
      <Button onClick={clearCompletedTasks}>Clear all completed</Button>
    </section>
  );
};

export default TodoList;
