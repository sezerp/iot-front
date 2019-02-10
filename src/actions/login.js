import { BACKEND } from '../config';
import { LOGIN } from './types';

const LOGIN_ENDPOINT = '/login';
const REGISTER_ENDPOINT = '/register'
const AUTHENTICATED_ENDPOINT = '/login/authenticated'

export const fetchFromLogin = ({
    endpoint,
    options,
    FETCH_TYPE,
    ERROR_TYPE,
    SUCCESS_TYPE
  }) => dispatch => {
    dispatch({ type: FETCH_TYPE});

    return fetch(`${BACKEND.ADDRESS}${endpoint}/v1`, options)
    .then(response => response.json())
    .then(json => {
        if (json.type === 'error') {
            dispatch({ type: ERROR_TYPE, message: json.message});
        } else {
            dispatch({ type: SUCCESS_TYPE, ...json });
        }
    })
    .catch(error => dispatch({ type: ERROR_TYPE, message: error.message}));
}

export const signin = ({ username, password }) => fetchFromLogin({
    endpoint: LOGIN_ENDPOINT,
    options: { 
        credentials: true , 
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    },
    FETCH_TYPE: LOGIN.FETCH,
    ERROR_TYPE: LOGIN.FETCH_ERROR,
    SUCCESS_TYPE: LOGIN.FETCH_SUCCESS
});

export const signup = ({ username, password, accountName }) => fetchFromLogin({
    endpoint: REGISTER_ENDPOINT,
    options: { 
        credentials: true , 
        method: 'POST',
        body: JSON.stringify({ username, password, accountName }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    },
    FETCH_TYPE: LOGIN.FETCH,
    ERROR_TYPE: LOGIN.FETCH_ERROR,
    SUCCESS_TYPE: LOGIN.FETCH_SUCCESS
});

export const fetchAuthenticated = () => fetchFromLogin({
    endpoint: AUTHENTICATED_ENDPOINT,
    options: { 
        credentials: 'include' , 
        method: 'POST'
    },
    FETCH_TYPE: LOGIN.FETCH,
    ERROR_TYPE: LOGIN.FETCH_ERROR,
    SUCCESS_TYPE: LOGIN.FETCH_AUTHENTICATED_SUCCESS
});