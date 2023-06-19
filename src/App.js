import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Side from './components/Side/Side';
import Maincontent from './components/Main/Maincontent';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from  './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';



function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header />
      <Side />
      <div>
        <Routes>
        <Route path='/dialogs/*' element={<DialogsContainer dispatch={props.dispatch} store={props.store} users={props.state.dialogs.users} messages={props.state.dialogs.messages} newMessagesText = {props.state.dialogs.newMessagesText} />} />
        <Route path='/main/*' element={<Maincontent store={props.store}  postinfo={props.state.maincontent.postinfo} maininfo={props.state.maincontent.maininfo}  newPostText={props.state.maincontent.newPostText} dispatch={props.dispatch}/>} />
        <Route path='/news/*' element={<News/>}/>
        <Route path='/music/*' element={<Music/>}/>
        <Route path='/settings/*' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
