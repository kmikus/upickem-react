import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import LoginPage from './pages/Login'
import HomePage from './pages/Home';
import LeaguePage from './pages/League';
import RegisterPage from './pages/Register';

const App = () => (

  <Router>
    <div className="App">

      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/league" component={LeaguePage} />

    </div>
  </Router>

)

export default App;
