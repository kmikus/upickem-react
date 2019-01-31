import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage';
import LeaguePage from './pages/League/LeaguePage';
import LoginHeading from './pages/Login/LoginHeading';
import { Header } from './components/Nav'
import API from './util/API';
import NewLeaguePage from './pages/NewLeague/NewLeaguePage';

class App extends React.Component {

  constructor(props) {
    super(props);

      //todo remove this, for testing only
    API.register("kevin", "mikus", "kevinpmikus2@gmail.com", "kmikus2", "GreatPassword2!").catch(rejected => {
      console.warn("Unable to register");
    })
    API.login("kmikus2", "GreatPassword2!")
  }

  render() {

    let router = (
      <Router>
        <div className="App">

          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/league" component={LeaguePage} />
          <Route path="/newleague" component={NewLeaguePage} />

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
          <div style={{ marginTop: '10vh' }} className="container">{router}</div>
        </div>
      )
    }

    return content;
  }

}

export default App;
