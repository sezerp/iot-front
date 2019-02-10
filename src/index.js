import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

import Root from './components/Root'
import rootReducer from './reducers';

import AuthRoute from './components/AuthRoute';
import { fetchAuthenticated } from './actions/login';
import LoginForm from './components/LoginForm';
import Register from './components/Register';


const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer( applyMiddleware(thunk) )
  );

store.dispatch(fetchAuthenticated())
.then(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Root}/>
          <Route path="/register" component={Register}/>
          <AuthRoute path="/login" component={LoginForm}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
});