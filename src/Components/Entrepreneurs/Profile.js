import React, {useEffect, useState} from 'react';
import {  AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './Appstyles';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(() => {
    const token = user?.token;

      setUser(JSON.parse(localStorage.getItem('profile')));
}, [location,  user?.token]);

  const logOut = () => {
    dispatch({type: 'LOGOUT'});

    history.push('/');

    setUser(null);
};
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar className={classes.toolbar}>
                  <div className={classes.profile}>
                      <Avatar className={classes.purple} alt = {user.result.name} src={user.result.imageUrl} />
                      <Typography className={classes.userName} variant="h6"> {user.result.name} </Typography>
                      <Button variant='contained' component={Link} to="/" className={classes.logout} color="primary" onClick={logOut}> Log Out</Button>
                  </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Profile