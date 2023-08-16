import { AppDispatch } from '../store';
import axios from 'axios';
import { ITodoItem } from '../../types/ITodoItem';
import { todoSlice } from './TodoSlice';

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(todoSlice.actions.todosFetching());
    const response = await axios.get<ITodoItem[]>(
      'https://jsonplaceholder.typicode.com/users/1/todos?_limit=5',
    );
    dispatch(todoSlice.actions.todosFetchingSuccess(response.data));
  } catch (e) {
    dispatch(todoSlice.actions.todosFetchingError('Error'));
  }
};
