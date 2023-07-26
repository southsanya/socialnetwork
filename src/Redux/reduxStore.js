import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import maincontentReducer from './maincontentReducer';
import dialogsReducer from './dialogsReducer';
import userReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    maincontent: maincontentReducer,
    dialogs: dialogsReducer,
    users: userReducer,
    auth: authReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers , applyMiddleware(thunkMiddleware));
window.store = store

export default store;