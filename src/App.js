import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import LoginPage from './pages/Login'
import HomePage from './pages/Home';
import LeaguePage from './pages/League';
import LoginHeading from './components/LoginHeading';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      isLoginScreen: true
    }
  }

  render() {

    let router = (
      <Router>
        <div className="App">

          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/league" component={LeaguePage} />

        </div>
      </Router>
    );

    let content;

    if (this.state.isLoginScreen) {
      content = (
        <div>
          <LoginHeading />
          <div className="container high-padding-form">
            {router}
          </div>
        </div>
      );
    }
     
    return content;
  }

}

export default App;
