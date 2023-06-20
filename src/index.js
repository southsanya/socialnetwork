import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/reduxStore';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
     <App state={state} store={store.getState()} dispatch={store.dispatch.bind(store)}/>
     {/* <App/> */}
    </StoreContext.Provider>
  </React.StrictMode>
);
}
rerenderEntireTree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state)
} );