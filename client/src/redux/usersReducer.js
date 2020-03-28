import {FOLLOW_USER, GET_USERS, UN_FOLLOW_USER} from "./types";

const initialState = [];

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return [...action.payload];
        case FOLLOW_USER:
            return state.map(function (user) {
                if (user.id === action.payload.user_id) user.sub_count++;
                return user;
            });
        case UN_FOLLOW_USER:
            return state.map(function (user) {
                if (user.id === action.payload.user_id) user.sub_count--;
                return user;
            });
        default:
            return state;
    }
};