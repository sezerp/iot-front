import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';

class Root extends Component {


    render() {
        return (
            <div>
                 Test Root 
                 <LoginForm/>
            </div>
            
        );
    }
}

// const componentConnector = connect();

export default Root;