import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Paper , TextField  } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { signin } from '../actions/login';
import TopBarPublic from './TopBarPublic';
import Footer from './Footer';
import fetchStatus from '../reducers/fetchStates';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });

class LoginForm extends Component {
    state = { username: 'username', password: 'password' }

    updateUsername = event => {
        this.setState({ username: event.target.value});
    }

    updatePassword = event => {
        this.setState({ password: event.target.value});
    }

    signin = event => {
        event.preventDefault();
 
        const { username, password } = this.state;
        this.props.signin({ username, password });
    }

    get Error() {   
        if ( this.props.login.status === fetchStatus.error) {
            return <div>Invalid username or Password</div>
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
            <TopBarPublic title="IoT" />
            <main className={classes.main}>
            <CssBaseline />
                <Paper className={classes.paper} >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                    <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input 
                            id="email" 
                            name="email" 
                            autoComplete="email" 
                            autoFocus
                            value={this.state.username}
                            onChange={this.updateUsername}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input 
                            name="password" 
                            type="password" 
                            id="password" 
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.updatePassword}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={this.signin}
                    >
                        Sign in
                    </Button>
                    </form>
                </Paper>
            </main>
            <Footer />
            </div>
        );
    }
}

export default connect(
    ({ login }) => ({ login }), 
    { signin })(withStyles(styles)(LoginForm));