import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

import Root from './components/Root'
import rootReducer from './reducers';

const reducerTest = (state, action) => {
  console.log('generationReducer', state);
    return {
      device: {
        id: 1
      }
    }
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => console.log('update', store.getState()))

store.dispatch({type: "dupa"})

render(
  <div>IoT from React
    <Root></Root>
  </div>,
  document.getElementById('root')
)