import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

const LoginPage = (props) => {
  return (
    <div>
      <LoginHeading />
      <div className="container">
        <LoginForm />
      </div>
    </div>
  )
}

const LoginHeading = (props) => {
  return (
    <h1 className="jumbotron">Welcome to uPickEm</h1>
  );
};

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  login = (event) => {
    event.preventDefault();
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => console.log(response.data));
    console.log('Clicked');
  };

  render() {
    return (
      <div style={{ margin: '10%' }}>
        <form onSubmit={this.login}>

          <div className="form-group">
            <input
              value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })}
              className="form-control" placeholder="Username or email"
            />
          </div>
          <div className="form-group">
            <input value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })}
              className="form-control" placeholder="Password" type="password" />
          </div>

          <div className="form-group">
            <input className="form-control btn btn-primary" type="submit" value="Login" />
          </div>

          <div className="form-group">
            <button className="form-control btn btn-outline-secondary">Register</button>
          </div>
        </form>
      </div>
    );
  };
};

export default LoginPage;