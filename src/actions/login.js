import { BACKEND } from '../config';
import { LOGIN } from './types';

const LOGIN_ENDPOINT = '';
const AUTHENTICATED_ENDPOINT = '/authenticated'

export const fetchFromLogin = ({
    endpoint,
    options,
    FETCH_TYPE,
    ERROR_TYPE,
    SUCCESS_TYPE
  }) => dispatch => {
    dispatch({ type: FETCH_TYPE});

    return fetch(`${BACKEND.ADDRESS}${endpoint}/v1`, options)
    .then(json => {
        if (json.type === 'error') {
            dispatch({ type: ERROR_TYPE, message: json.message});
        } else {
            dispatch({ type: SUCCESS_TYPE, ...json });
        }
    })
    .catch(error => dispatch({ type: ERROR_TYPE, message: error.message}));
}

export const login = ({ username, password }) => fetchFromLogin({
    endpoint: AUTHENTICATED_ENDPOINT,
    options: { 
        credentials: LOGIN_ENDPOINT , 
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    },
    FETCH_TYPE: LOGIN.FETCH,
    ERROR_TYPE: LOGIN.FETCH_ERROR,
    SUCCESS_TYPE: LOGIN.FETCH_AUTHENTICATED_SUCCESS
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