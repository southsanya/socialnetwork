import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/reduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  console.log(store.getState())
root.render(
  <React.StrictMode>
    <App state={state} store={store.getState()} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>
);
}
rerenderEntireTree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state)
} );