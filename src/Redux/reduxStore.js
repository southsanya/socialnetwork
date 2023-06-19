import {combineReducers, legacy_createStore as createStore} from 'redux';
import maincontentReducer from './maincontentReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
    maincontent: maincontentReducer,
    dialogs: dialogsReducer
})



let store = createStore(reducers);

export default store;