import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import Home from './Home';

class Root extends Component {


    render() {
        return (
                 false ? <LoginForm/> : <Home />
        );
    }
}

// const componentConnector = connect();

export default Root;