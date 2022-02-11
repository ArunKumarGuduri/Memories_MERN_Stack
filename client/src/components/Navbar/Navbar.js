import React, { useState, useEffect } from 'react';
import { Typography, AppBar, Toolbar, Avatar, Button } from "@mui/material";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from "./styles"
import memories from "../../images/memories.png"

const Navbar = () => {
    const classes = useStyles();
    const profileObj = JSON.parse(localStorage.getItem("profile"));
    const profile = typeof profileObj === "object" && Object.keys(profileObj).length ? profileObj : null;
    const [user, setUser] = useState(profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const token = user?.token;
        // check for JWT token expiry
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken * 1000 < new Date().getTime()) logout();
        }
        setUser(profile);
    }, [location]);
    const logout = () => {
        dispatch({ type: 'AUTH' });
        navigate('/');
        setUser(null);
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                {/* component={Link} to='/' */}
                <Typography variant="h4" component={Link} to='/' align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt='Memories' height="60" />
            </div>
            <Toolbar>
                {!!user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography variant='h6' className={classes.userName}>{user.result.name}</Typography>
                        <Button className={classes.logout} variant='contained' color='secondary' onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    // component = { Link } to='/auth'
                    <Button variant='contained' component={Link} to='/auth' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;