import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Devices'],
    },
    {
      title: 'Resources',
      description: ['Resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

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
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit * 6}px 0`,
    },
  });

class Footer extends Component {
    

    render () {
        const { classes } = this.props;
        return (
            <footer className={classNames(classes.footer, classes.layout)}>
            <Grid container spacing={32} justify="space-evenly">
            {footers.map(footer => (
                <Grid item xs key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                </Typography>
                {footer.description.map(item => (
                    <Typography key={item} variant="subtitle1" color="textSecondary">
                    {item}
                    </Typography>
                ))}
                    </Grid>
                ))}
                </Grid>
            </footer>
        )
    }
}

export default connect()(withStyles(styles)(Footer));