import './App.css';
import Side from './components/Side/Side';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainUseParams from './components/Main/MainUseParams';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import React from 'react';
import Preloader from './components/common/preloader/preloader';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

// import UsersContainer from './components/Users/UsersContainer';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));



function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Side />
        <div>
          <Routes>
            <Route path='/dialogs/*' element={
              <React.Suspense fallback={<Preloader/>}>
                <DialogsContainer />
              </React.Suspense>
            } />
            <Route path='/main/*' element={<MainUseParams />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={
              <React.Suspense fallback={<Preloader/>}>
                <UsersContainer />
              </React.Suspense>} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
