import React, { Component } from 'react';
import { connect } from 'react-redux';

import Device from './Device';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Device />
            </div>
        )
    }
}

export default Home;