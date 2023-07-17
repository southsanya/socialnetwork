import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/reduxStore';
// import StoreContext from './StoreContext';
import { Provider } from 'react-redux';

setInterval(() => {
  store.dispatch({type:'FAKE'})
}, 1000)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App/>
     {/* <App/> */}
    </Provider>
  </React.StrictMode>
)