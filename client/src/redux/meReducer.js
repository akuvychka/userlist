import {GET_ME} from "./types";

const initialState = {
    me: {
        name: "Defaut name"
    },
    follows: []
};
export const meReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ME:
            return {...state, me: action.payload.me, follows: action.payload.mappings.map(v=>v.user_id) };
        default:
            return state;
    }
};