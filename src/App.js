import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileConteiner from './components/Profile/ProfileConteiner.jsx';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render = {() => <ProfileConteiner />}/>
          <Route path='/dialogs' render = {() => <DialogsContainer />}/>
          <Route path='/music' render = {() => <Music />} />
          <Route path='/news' render = {() => <News />} />
          <Route path='/settings' render = {() => <Settings />} />
          <Route path='/users' render = {() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
