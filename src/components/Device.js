import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class Device extends Component {


    render() {
        return (
            <div>
                Device
                <br />
                <Link to="/register">Register</Link>
            </div>
            
        );
    }
}

export default connect()(Device);

