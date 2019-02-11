import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    appBar: {
      position: 'relative',
    },
    toolbarTitle: {
      flex: 1,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing.unit * 2,
      },
    },
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit * 6}px 0`,
    },
  });



class TopBarPublic extends Component {
    title = 'Home';
    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    IoT
                </Typography>
                <Button color="inherit">
                        <NavLink 
                            to="/" 
                            style={{color: 'white', textDecoration: 'none'}} 
                            activeStyle={{color: '#5d5f63', textDecoration: 'none'}}
                        >
                            Home
                        </NavLink>
                    </Button>
                    <Button color="inherit">
                        <NavLink 
                            to="/pricing" 
                            style={{color: 'black', textDecoration: 'none'}} 
                            activeStyle={{color: '#5d5f63', textDecoration: 'none'}}
                        >
                           Pricing
                        </NavLink>
                    </Button>
                    <Button color="inherit">
                        <NavLink 
                            to="/register" 
                            style={{color: 'black', textDecoration: 'none'}} 
                            activeStyle={{color: '#5d5f63', textDecoration: 'none'}}
                        >
                           Sign Up
                        </NavLink>
                    </Button>
                    <Button color="inherit" variant="outlined">
                        <NavLink 
                            to="/login" 
                            style={{color: 'black', textDecoration: 'none'}} 
                            activeStyle={{color: '#5d5f63', textDecoration: 'none'}}
                        >
                           Sign In
                        </NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default connect()(withStyles(styles)(TopBarPublic));