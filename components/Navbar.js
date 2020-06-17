import React from 'react';
import theme from '../src/Theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/styles";     //material-ui inline-styles
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import Link from "next/link";
import Router from "next/router";


/*inline styles*/
const useStyles = makeStyles(theme => ({
    logoContainer: {
        '& img':{
            width: '75px',
        }
    }
}));

const Navbar = (prop) => {
    const classes = useStyles(); //inline styles
    const theme = useTheme();

    return (
        <Link href="/">
            <div className={classes.logoContainer}>
                <img src={'/nba-logo.png'} alt="nba logo"/>
            </div>
        </Link>
    );
};

export default Navbar;

/*
padding: 2rem 1.5rem;*/
