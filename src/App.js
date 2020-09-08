import React from 'react';
import MyHookComponent from './components/MyHookComponent';
import VisorPeliculas from './components/movies/VisorPeliculas';
import InsertarPeliculas from './components/movies/InsertarPeliculas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create" >
            <InsertarPeliculas/>
          </Route>
          <Route path="/update/:id" >
            <VisorPeliculas/>
          </Route>
          <Route path="/view/:id" >
            <VisorPeliculas/>
          </Route>
          <Route path="/delete/:id" >
            <VisorPeliculas/>
          </Route>
          <Route path="/" >
            <VisorPeliculas/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
