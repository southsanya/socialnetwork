import './App.css';
// import Header from './components/Header/Header';
import Side from './components/Side/Side';
// import Maincontent from './components/Main/Maincontent';
import News from './components/News/News';
import Music from  './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
// import MaincontentContainer from './components/Main/MaincontentContainer';
import MainUseParams from './components/Main/MainUseParams';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';



function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <HeaderContainer />
      <Side />
      <div>
        <Routes>
        <Route path='/dialogs/*' element={<DialogsContainer/>} />
        <Route path='/main/*' element={<MainUseParams/>} />
        <Route path='/news/*' element={<News/>}/>
        <Route path='/music/*' element={<Music/>}/>
        <Route path='/settings/*' element={<Settings/>}/>
        <Route path='/users/*' element={<UsersContainer/>}/>
        <Route path='/login/*' element={<Login/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
