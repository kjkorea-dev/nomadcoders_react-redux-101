import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDosSlice = createSlice({
  name: 'toDos',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDosSlice.actions;

export default configureStore({ reducer: toDosSlice.reducer });
