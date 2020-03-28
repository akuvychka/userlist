import {GET_ME, FOLLOW_USER} from "./types";

const initialState = {
    me: {
        name: "Defaut name",

    },
    mappings:[],
    follows: []
};
export const meReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ME:
            return {...state, me: action.payload.me, mappings: action.payload.mappings, follows: action.payload.mappings.map(v=>v.user_id) };
        case FOLLOW_USER:
            return {...state, follows: [...state.follows, action.payload.user_id], mappings: [...state.mappings, action.payload] }
        default:
            return state;
    }
};