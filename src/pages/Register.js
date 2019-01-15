import React from 'react';
import API from '../util/API';

export default class RegisterPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alertVisible: false,
            alertText: ""
        }

        this.dismissAlert = this.dismissAlert.bind(this);
        this.showAlert = this.showAlert.bind(this);
    }

    dismissAlert() {
        this.setState({ alertVisible: false });
    }

    showAlert(message) {
        this.setState({
            alertVisible: true,
            alertText: message
        });
    }

    render() {
        return (
            <RegisterForm showAlert={this.props.showAlert} openLoginForm={this.props.openLoginForm}/>
        );
    }

}

class RegisterForm extends React.Component {

    //TODO autofill doesn't work for form
    constructor(props) {

        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
        };

        this.register = this.register.bind(this);
    }

    register(event) {
        event.preventDefault();
        API.register(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.username,
            this.state.password
        ).then(
            response => {
                if (response.data.success) {
                    // go back to login screen with gucci message
                    this.props.showAlert("success", "Registered successfully!");
                    this.props.openLoginForm();
                } else {
                    console.log('hello');
                }
            },
            failed => {
                // TODO customize the error message
                this.props.showAlert("danger", "Error occurred during registration");
            }
        );
    };

    render() {
        return (
            <form onSubmit={this.register}>
                <div className="form-group">
                    <input onChange={(e) => this.setState({ firstName: e.target.value })} className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <input onChange={(e) => this.setState({ lastName: e.target.value })} className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <input onChange={(e) => this.setState({ email: e.target.value })} className="form-control" placeholder="Email" type="email" />
                </div>
                <div className="form-group">
                    <input onChange={(e) => this.setState({ username: e.target.value })} className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input onChange={(e) => this.setState({ password: e.target.value })} className="form-control" placeholder="Password" type="password" />
                </div>

                <div className="form-group">
                    <input className="form-control btn btn-primary" type="submit" value="Register" />
                </div>

                <div className="form-group">
                    <a href="/login" className="form-control btn btn-outline-secondary">Cancel</a>
                </div>
            </form>
        );
    }
}