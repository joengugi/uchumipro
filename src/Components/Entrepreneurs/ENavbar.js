import React, { useState, useRef} from 'react'
// import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, List, ListItem, Popper, Paper, ClickAwayListener } from '@material-ui/core';





const ENavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleClick = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
        setIsOpen(false);
    };

  return (
    <AppBar position="static">
    <Toolbar>
    <Typography variant="h6"> findMyInvestor </Typography>
        <Button ref={anchorRef} onClick={handleClick}>
            Posts
        </Button>

        <Popper open={isOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                    <List>
                        <ListItem button component={Link} to="/entrepreneur/addPost">
                            Add Post
                        </ListItem>
                        <ListItem button component={Link} to="/entrepreneur/myPosts">
                            My Posts
                        </ListItem>
                    </List>
                </ClickAwayListener>
            </Paper>
        </Popper>
    
        <Button component={Link} to="/entrepreneur/connect" color="inherit">
            Connect
        </Button>
        <Button component={Link} to="/entrepreneur/eprofile" color="inherit">
            Profile
        </Button>
    </Toolbar>
  </AppBar>
  )
}

export default ENavbar