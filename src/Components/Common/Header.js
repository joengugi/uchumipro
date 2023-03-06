import React, {useEffect, useState} from 'react';
import {  AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
// import memories from "../Images/memories.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import useStyles from '../../Appstyles';

const Header = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const logOut = () => {
    dispatch({type: 'LOGOUT'});

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

      setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user?.token]);

  return (
     <AppBar className={classes.appBar} position="static" color="inherit">
        <div>
            <Typography component={Link} to="/" className={ classes.heading } variant="h2" align="center"> Memories</Typography>
            {/* <img className={ classes.image } src={memories} alt="memories" height="60"/> */}
        </div>
      
        <Toolbar className={classes.toolbar}>
            {user? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt = {user.result.name} src={user.result.imageUrl} />
                    <Typography className={classes.userName} variant="h6"> {user.result.name} </Typography>
                    <Button variant='contained' className={classes.logout} color="secondary" onClick={logOut}> Log Out</Button>
                </div>
            ) : (
                <Button component = {Link} to ="/auth" variant='contained' color='primary'> Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default Header