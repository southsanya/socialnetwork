import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/reduxStore';
import StoreContext from './StoreContext';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App/>
     {/* <App/> */}
    </Provider>
  </React.StrictMode>
);
}
rerenderEntireTree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state)
} );