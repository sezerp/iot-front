import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import Home from './Home';

class Root extends Component {

    render() {
        console.log('this.props.login.loggedIn', this.props.login.loggedIn);
        return (
            this.props.login.loggedIn ? <Home /> :<LoginForm/>
        );
    }
}

export default connect(
    ({ login }) => ({ login }),
    null
)(Root);