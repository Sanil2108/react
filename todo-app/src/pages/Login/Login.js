import React, { Component } from 'react'
import * as axios from 'axios';
import store from '../../store/index';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    async onLogin() {
        const response = await axios.get(`http://localhost:5000/users?email=${this.state.email}`);
        const user = response.data[0];
        if (user.password === this.state.password) {
            store.dispatch({
                type: 'set_user',
                user,
            })

            this.props.setRedirect('/home');
        }
        else {
            alert('401')
        }
    }

    render() {
        return (
            <div>
                Email: <input
                    value={this.state.email}
                    type="email"
                    onChange={ (event) => this.setState({ email: event.target.value }) }
                ></input>
                Password: <input
                    value={this.state.password}
                    type="password"
                    onChange={ (event) => this.setState({ password: event.target.value }) }
                ></input>
                <button onClick={this.onLogin.bind(this)}>Login</button>
            </div>
        )
    }
}

export default Login
