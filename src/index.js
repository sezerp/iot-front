import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
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

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer( applyMiddleware(thunk) )
  );

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)