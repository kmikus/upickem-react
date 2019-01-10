import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080/api/"
});

export default class API {

    static login(usernameOrEmail, password) {
        return instance.post("auth/signin", {
            usernameOrEmail: usernameOrEmail,
            password: password
        });
    }

    static register(email, firstName, lastName, password, username) {
        return instance.post("auth/signup", {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            username: username
        })
    } 
}