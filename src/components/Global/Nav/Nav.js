import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginRight: theme.spacing.unit,
  },
});

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item>
              <Button component={Link} to="/home" variant="contained" className={classes.button} color="primary" aria-label="Home">
                Home
                <Icon className={classes.rightIcon}>home</Icon> 
              </Button>  
            </Grid>
            <Grid item>
              <Button component={Link} to="/about" variant="contained" className={classes.button} color="primary" aria-label="About">
                About
                <Icon className={classes.rightIcon}>info</Icon>  
              </Button>  
            </Grid>
            <Grid item>
              <Button component={Link} to="/resources" variant="contained" className={classes.button} color="primary" aria-label="Resources">
                Resources
                <Icon className={classes.rightIcon}>library_books</Icon>
              </Button>  
            </Grid>
          </Grid>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button component={Link} to="/register" variant="contained" className={classes.button} color="primary" aria-label="Register" style={{ flex: 1 }}>
                Register
                <Icon className={classes.rightIcon}>person_add</Icon>
              </Button>  
            </Grid>
            <Grid item>
              <Button component={Link} to="/login" variant="contained" className={classes.button} color="primary" aria-label="Log in" style={{ flex: 1 }}>
                Login
                <Icon className={classes.rightIcon}>lock_open</Icon>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);