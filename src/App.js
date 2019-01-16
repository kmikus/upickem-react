import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage';
import LeaguePage from './pages/League/LeaguePage';
import LoginHeading from './pages/Login/LoginHeading';
import {Header} from './components/Nav'

class App extends React.Component {

  render() {

    let router = (
      <Router>
        <div className="App">

          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          {/* TODO pass funciton handler to change state to not login screen */}
          <Route path="/home" component={HomePage} />
          <Route path="/league" component={LeaguePage} />

        </div>
      </Router>
    );

    let content;

    if (window.location.pathname === "/login") {
      content = (
        <div>
          <LoginHeading />
          <div className="container high-padding-form">
            {router}
          </div>
        </div>
      );
    } else {
      content = (
        <div>
    <Header />
    <div style={{ paddingTop: '8vh' }} className="container">{router}</div>
    </div>
      )
    }
     
    return content;
  }

}

export default App;
