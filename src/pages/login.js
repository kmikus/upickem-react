import React from 'react';
import '../App.css';
import API from '../util/API';
import LoginHeading from '../components/LoginHeading'

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

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  login = (event) => {
    event.preventDefault();
    API.login("kevinpmikus@gmail.com", "password");
  };

  register = (event) => {
    event.preventDefault();
    API.register("kevinpmikus@gmail.com", "kevin", "mikus", "password", "kmikus");
  }

  render() {
    return (
      <div>
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
            <a href="/register" onClick={this.goToRegisterPage} className="form-control btn btn-outline-secondary">Register</a>
          </div>
        </form>
      </div>
    );
  };
};

export default LoginPage;