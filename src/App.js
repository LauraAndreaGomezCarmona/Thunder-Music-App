import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideNavigationBar from './Components/SideNavigationBar';
import './App.css';
import { Songs }  from './Components/Pages/Songs';
import { SongsQuiz } from './Components/Pages/SongsQuiz';
import { Music } from './Components/Pages/Music';
import { Home } from './Components/Pages/Home';

const App = () => {
  return (
        <div className='flex' aria-hidden='true'>
          <Router className='App' >
            <SideNavigationBar/>

            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/songs' component={Songs} />
              <Route exact path='/music' component={Music} />
              <Route path='/songs-quiz' component={SongsQuiz} />
            </Switch>
          </Router>

        </div>
  );
}

export default App;
