import React from 'react';
import LoginHeading from '../components/LoginHeading'
import API from '../util/API';
import { Alert } from 'reactstrap';

export default class RegisterPage extends React.Component {

    state = {
        displayAlert: false,
        alertText: ""
    }

    render() {
        return (
            <div>
                <LoginHeading />
                <div className="container">
                {/* TODO work on this conditionally */}
                    <Alert color="primary">Hey</Alert>
                    <RegisterForm />
                </div>
            </div>
        );
    }

}

class RegisterForm extends React.Component {

    //TODO autofill doesn't work for form
    constructor(props) {

        super(props);

        this.state = {
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
            }


        };

        this.register = this.register.bind(this);
    }

    register(event) {
        event.preventDefault();
        API.register(...Object.values(this.state.formData)).then(response => {
            if (response.data.success) {
                // redirect to login, show success message
            } else {
                // show error message
            }
        });
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