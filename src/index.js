import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';
import thunk from 'redux-thunk';

import Root from './components/Root'
import rootReducer from './reducers';

import { fetchAuthenticated } from './actions/login';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Home from './components/Home';
import HomeInternal from './components/HomeInternal';
import PricingPage from './components/PricingPage';


const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer( applyMiddleware(thunk) )
  );

const AuthRoute = props => {
  if (!store.getState().login.loggedIn) {
    console.log('dupa)))))))');
    return <Redirect to={{pathname: '/'}} />
  }
  const { path, component } = props;
  return <Route path={ path } component={ component } />
}

store.dispatch(fetchAuthenticated())
.then(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Root}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/pricing" component={PricingPage}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
});