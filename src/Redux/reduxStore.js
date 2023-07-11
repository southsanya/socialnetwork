import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import maincontentReducer from './maincontentReducer';
import dialogsReducer from './dialogsReducer';
import userReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    maincontent: maincontentReducer,
    dialogs: dialogsReducer,
    users: userReducer,
    auth: authReducer
})



let store = createStore(reducers , applyMiddleware(thunkMiddleware));
window.store = store

export default store;