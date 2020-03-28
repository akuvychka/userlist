import {FOLLOW_USER, GET_ME, GET_USERS} from "./types";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const requestParams = () => {
    return { "X-User" : cookies.get('user') }
};

export function getMe() {
    return async dispatch => {
        const response = await fetch('http://127.0.0.1:3001/api/users/me', { headers: requestParams() });
        if (response.status === 200) {
            const me = await response.json();
            dispatch( {type: GET_ME, payload: me} );
        }
    }
}

export function getUsers() {
    return async dispatch => {
        const response = await fetch('http://127.0.0.1:3001/api/users', { headers: requestParams() });
        if (response.status === 200) {
            const json = await response.json();
            dispatch( {type: GET_USERS, payload: json.users} );
        }
    }
}

export function followUser(id) {
    return async dispatch => {
        const body = new FormData();
        body.append('user_id', id);
        const response = await fetch('http://127.0.0.1:3001/api/subscriber_user_mappings', {
            method: 'POST',
            headers: requestParams(),
            body: body
        });
        if (response.status === 200) {
            const json = await response.json();
            dispatch( {type: FOLLOW_USER, payload: json.subscriber_user_mapping} );
        }
    }
}

export function unFollowUser(id) {

}