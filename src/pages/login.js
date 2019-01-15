import React from 'react';
import '../App.css';
import API from '../util/API';
import RegisterPage from './Register';
import {Alert} from 'reactstrap';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      content: <LoginForm showAlert={this.showAlert} openRegistrationForm={this.openRegistrationForm} />,
      alertVisible: false,
      alertMessage: "",
      alertType: "info"
    }

    this.openRegistrationForm = this.openRegistrationForm.bind(this);
    this.openLoginForm = this.openLoginForm.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  openRegistrationForm = () => {
    this.setState({content: <RegisterPage openLoginForm={this.openLoginForm} showAlert={this.showAlert} />});
  }

  openLoginForm = () => {
    this.setState({content: <LoginForm showAlert={this.showAlert} openRegistrationForm={this.openRegistrationForm} />})
  }

  showAlert = (type, message) => {
    this.setState({alertVisible: true, alertMessage: message, alertType: type})
  }

  onDismiss = () => {
    this.setState({ alertVisible: false });
  }


  render() {
    return(
      <div>
        <Alert toggle={this.onDismiss} color={this.state.alertType} isOpen={this.state.alertVisible}>{this.state.alertMessage}</Alert>
        {this.state.content}
      </div>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.login = this.login.bind(this);
  }

  login = (event) => {
    event.preventDefault();
    API.login("kevinpmikus@gmail.com", "password");
  };

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
            <button onClick={this.props.openRegistrationForm} className="form-control btn btn-outline-secondary">Register</button>
          </div>
        </form>
      </div>
    );
  };
};

export default LoginPage;