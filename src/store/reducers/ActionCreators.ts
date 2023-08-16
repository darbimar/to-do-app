import { AppDispatch } from '../store';
import axios from 'axios';
import { ITodoItem } from '../../types/ITodoItem';
import { todosFetching, todosFetchingSuccess, todosFetchingError } from './TodoSlice';

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(todosFetching());
    const response = await axios.get<ITodoItem[]>(
      'https://jsonplaceholder.typicode.com/users/1/todos?_limit=5',
    );
    dispatch(todosFetchingSuccess(response.data));
  } catch (e) {
    dispatch(todosFetchingError('Error'));
  }
};
