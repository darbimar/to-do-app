import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from '../../types/ITodoItem';

interface TodoState {
  todos: ITodoItem[];
  isLoading: boolean;
  error: string;
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: '',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todosFetching(state) {
      state.isLoading = true;
    },
    todosFetchingSuccess(state, action: PayloadAction<ITodoItem[]>) {
      state.isLoading = false;
      state.error = '';
      state.todos = action.payload;
    },
    todosFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
