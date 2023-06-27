import {combineReducers, legacy_createStore as createStore} from 'redux';
import maincontentReducer from './maincontentReducer';
import dialogsReducer from './dialogsReducer';
import userReducer from './usersReducer';

let reducers = combineReducers({
    maincontent: maincontentReducer,
    dialogs: dialogsReducer,
    users: userReducer
})



let store = createStore(reducers);
window.store = store

export default store;