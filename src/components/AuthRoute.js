import { Route, Redirect } from 'react-router-dom';

const AuthRoute = props => {
    if (! store.getState().login.loggedIn) {
      return <Redirect to={{pathname: '/'}} />
    }
    const { path, component } = props;
    return <Route path={ path } component={ component } />
  }

export default AuthRoute;