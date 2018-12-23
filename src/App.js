import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import LoginPage from './pages/Login'
import HomePage from './pages/Home';

const App = () => (

  <Router>
    <div className="App">

      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />

    </div>
  </Router>

)

export default App;
