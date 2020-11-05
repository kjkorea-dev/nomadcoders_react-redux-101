import { createAction, createReducer } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// * map object : works only in javascript
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

// * builder callback : preferred
const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload)
    );
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
