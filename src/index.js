import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

const countModifier = (count = 0, action) => {
  console.log(count, action.type);
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  }
  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });

console.log(countStore.getState());
