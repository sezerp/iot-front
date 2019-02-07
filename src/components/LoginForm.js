import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
    state = { username: 'username', password: 'password' }
    render() {
        return (
            <div>
                <div>Login Form</div>
                <form>
                    <input type="text" value={this.state.username} name="name" placeholder="username" />
                    <br />
                    <input type="password" value={this.state.password} name="password" placeholder="password"/>
                    <br />
                    <input type="submit" value="Log In" />
                </form>
            </div>
            
        )
    }
}

// const mapStateToProps = state => {
//     const 
// };

const componentCnnector = connect(); 

export default componentCnnector(LoginForm);