import {GET_ME, GET_USERS} from "./types";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const requestParams = () => {
    return {
        headers: {
            "X-User" : cookies.get('user')
        }
    }
};

export function getMe() {
    return async dispatch => {
        const response = await fetch('http://127.0.0.1:3001/api/users/me', requestParams());
        if (response.status === 200) {
            const me = await response.json();
            dispatch( {type: GET_ME, payload: me} );
        }
    }
}

export function getUsers() {
    return async dispatch => {
        const response = await fetch('http://127.0.0.1:3001/api/users', requestParams());
        if (response.status === 200) {
            const json = await response.json();
            dispatch( {type: GET_USERS, payload: json.users} );
        }
    }
}