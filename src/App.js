import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import Homepage from "./Homepage/Homepage";
import Showpage from './Showpage/Showpage';
import Form from './Form/Form';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage searchQuery='all' />
        </Route>
        <Route exact path="/description">
          <Showpage />
        </Route>
        <Route exact path="/book">
          <Form />
        </Route>
      </Switch>
    </Router >
  )
}

export default App;
