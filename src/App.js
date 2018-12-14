import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginHeading />
        <div className="container">
          <LoginForm />
        </div>
      </div>
    );
  }
}

const LoginHeading = (props) => {
  return (
    <h1 className="jumbotron">Welcome to uPickEm</h1>
  );
};

class LoginForm extends Component {
  render() {
    return (
      <div style={{margin: '10%'}}>
        <form>

          <div className="form-group">
            <input className="form-control" placeholder="Username or email" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" />
          </div>

          <div className="form-group">
            <input className="form-control btn btn-primary" type="submit" value="Login"/>
          </div>

          <div className="form-group">
            <button className="form-control btn btn-outline-secondary">Register</button>
          </div>
        </form>
      </div>
    );
  }
};

export default App;
