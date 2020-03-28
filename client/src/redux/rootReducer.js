import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {meReducer} from "./meReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    me: meReducer
});