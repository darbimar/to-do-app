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
    addTask: (state, action: { payload: ITodoItem }) => {
      state.todos.push(action.payload);
    },
    editTask: (state, action: { payload: { id: number; value: string } }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index] = {
        ...state.todos[index],
        title: action.payload.value,
      };
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTask: (state, action: { payload: { id: number; isCompleted: boolean } }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index] = {
        ...state.todos[index],
        completed: !action.payload.isCompleted,
      };
    },
  },
});

export const {
  todosFetching,
  todosFetchingSuccess,
  todosFetchingError,
  addTask,
  editTask,
  removeTask,
  toggleTask,
} = todoSlice.actions;

export default todoSlice.reducer;
