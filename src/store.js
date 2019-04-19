import {createStore,combineReducers} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
  todos:todoReducer,
  filter:filterReducer
});


const initialState = {
  todos: [
    {
      id: 0,
      text: 'First',
      completed: true
    },
    {
      id: 1,
      text: 'Second',
      completed: false
    },
    {
      id: 2,
      text: 'Third',
      completed: true
    }
  ],
  filter:'全部'
}

export default createStore(reducer,initialState);