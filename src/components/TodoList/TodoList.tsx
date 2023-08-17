import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchTodos } from '../../store/reducers/ActionCreators';
import TodoItem from '../TodoItem.tsx/TodoItem';
import Filter from '../Filter/Filter';
import Spinner from '../Spinner/Spinner';
import styles from './TodoList.module.scss';

const TodoList: React.FC = () => {
  const { todos, status } = useAppSelector((state) => state.todoReducer);
  const [filter, setFilter] = useState('All');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

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
    <section className={styles.wrapper}>
      <Filter filter={filter} setFilter={setFilter} />
      {status === 'loading' && <Spinner />}
      {status === 'succeeded' && (
        <div className={styles.list}>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      )}
      {status === 'succeeded' && filteredTodos.length === 0 && (
        <div className={styles.message}>Список задач пуст</div>
      )}
      {status === 'failed' && (
        <div className={styles.message}>Произошла ошибка при загрузке данных</div>
      )}
    </section>
  );
};

export default TodoList;
