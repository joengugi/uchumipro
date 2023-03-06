import React from 'react'
import { Outlet } from 'react-router-dom'
import ENavbar from './ENavbar'

const Ehome = () => {
  return (
    <div>
        <ENavbar/>
        <Outlet/>
    </div>
  )
}

export default Ehome








































// import React, {useEffect, useState} from 'react';
// import {  AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
// import useStyles from './Appstyles';
// import { useDispatch } from 'react-redux';
// import { Link, useNavigate, useLocation } from "react-router-dom";

// const Ehome = () => {

//     const classes = useStyles();
//     const dispatch = useDispatch();
//     const history = useNavigate();
//     const location = useLocation();
//     const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

//     // useEffect(() => {
//     //     const token = user?.token;
    
//     //       setUser(JSON.parse(localStorage.getItem('profile')));
//     // }, [location,  user?.token]);

//     // const logOut = () => {
//     //     dispatch({type: 'LOGOUT'});
    
//     //     history.push('/sign-in');
    
//     //     setUser(null);
//     // };


//   return (
//     <div>
//         <AppBar className={classes.appBar} position="static" color="inherit">
//             <div>
//                 <Typography component={Link} to="/Ehome" className={ classes.heading } variant="h2" align="center"> UchumiPro </Typography>
//             </div>
        
//             <Toolbar className={classes.toolbar}>
//                     <div className={classes.profile}>
//                         <Avatar className={classes.purple} alt = {user.result.name} src={user.result.imageUrl} />
//                         <Typography className={classes.userName} variant="h6"> {user.result.name} </Typography>
//                         <Button variant='contained' className={classes.logout} color="secondary" component={Link} to="/entrepreneur/addPosts"> Create Post</Button>
//                         <Button variant='contained' className={classes.logout} color="secondary" component={Link} to="/entrepreneur/myPosts"> My Posts</Button>
//                         <Button variant='contained' className={classes.logout} color="secondary" component = {Link} to = '/entrepreneur/profile'> Profile </Button>
//                     </div>
//             </Toolbar>
//         </AppBar>
//     </div>
//   )
// }

// export default Ehome