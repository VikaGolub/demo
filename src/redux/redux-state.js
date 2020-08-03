import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: messageReducer,
    UsersPage: usersReducer,
    Auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
