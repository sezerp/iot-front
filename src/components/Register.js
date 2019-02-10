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

import { signup } from '../actions/login';
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

class Register extends Component {
    state = { username: 'username', password: 'password', accountName: '' }

    updateUsername = event => {
        this.setState({ username: event.target.value});
    }

    updatePassword = event => {
        this.setState({ password: event.target.value});
    }

    updateCompanyName = event => {
        this.setState({ accountName: event.target.value});
    }

    signup = event => {
        event.preventDefault();
 
        const { username, password, accountName } = this.state;
        this.props.signup({ username, password, accountName });
    }

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
            <CssBaseline />
                <Paper className={classes.paper} >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
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
                        <InputLabel htmlFor="email">Company Name</InputLabel>
                        <Input 
                            id="companyname" 
                            name="text" 
                            value={this.state.accountName}
                            onChange={this.updateCompanyName}
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
                        onClick={this.signup}
                    >
                        Sign up
                    </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default connect(
    ({ login }) => ({ login }), 
    { signup })(withStyles(styles)(Register));