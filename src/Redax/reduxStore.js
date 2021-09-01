import {combineReducers, createStore, applyMiddleware} from 'redux';
import profilePageReducer from './profilePageReducer';
import mesagePageReducer from './mesagePageReducer';
import usersReduser from './usersReduser';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

const redusers = combineReducers({
    profilePage: profilePageReducer,
    mesagePage: mesagePageReducer,
    userPage: usersReduser,
    auth: authReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;