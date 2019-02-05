import { LOGIN } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_LOGIN = { loggedIn: false };

const login = (state = DEFAULT_LOGIN, action) => {
  switch(action.type) {
    case LOGIN.FETCH:
      return { ...state, status: fetchStates.fetching };
    case LOGIN.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message }
    case LOGIN.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: true
      };
    case LOGIN.FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: false
      };
    case LOGIN.FETCH_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: action.authenticated
      };
    default:
      return state;
  }
};

export default login;