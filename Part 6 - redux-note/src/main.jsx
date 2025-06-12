import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';
import filterReducer from '../reducers/filterReducer';

import App from './App';
import noteReducer from '../reducers/noteReducer';

const reducer = combineReducers({
  note: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
