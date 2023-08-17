import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from '../../types/ITodoItem';

interface TodoState {
  todos: ITodoItem[];
  status: string;
}

const initialState: TodoState = {
  todos: [],
  status: 'idle',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todosFetching(state) {
      state.status = 'loading';
    },
    todosFetchingSuccess(state, action: PayloadAction<ITodoItem[]>) {
      state.status = 'succeeded';
      state.todos = action.payload;
    },
    todosFetchingError(state) {
      state.status = 'failed';
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
    clearTasks: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
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
  clearTasks,
} = todoSlice.actions;

export default todoSlice.reducer;
