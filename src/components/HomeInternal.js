import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopBarPublic from './TopBarPublic';
import Footer from './Footer';


class HomeInternal extends Component {

    render() {
        return (
            <div>
                <TopBarPublic title='IoT'/>
                <br />
                <h1>HomeInternal</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}

export default connect()(HomeInternal);