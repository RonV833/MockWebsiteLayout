import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import DrawerComponent from './DrawerComponent';
   // import { yellow } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    navlink: {
        marginLeft: theme.spacing(5),
        display: 'flex',

    },
    logo: {
        flexGrow: 1,
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        marginLeft: theme.spacing(10),
        '&:hover' : {
            color: 'yellow',
            borderBottom: '1px solid white'
        },
    }
}));
  
const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <AppBar position="static">
            <CssBaseline/>
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>Company Name</Typography>
                {isMobile ? <DrawerComponent/> : 
                <div className={classes.navlink}>
                    <Link to="/" className={classes.link}>HOME</Link>
                    
                    <Link to="/about" className={classes.link}>ABOUT</Link>
                    <Link to="/contact" className={classes.link}>CONTACT US</Link>
                    <Link to="/faq" className={classes.link}>FAQ</Link>
                    <Link to="/porfolio" className={classes.link}>Porfolio</Link>
                    <Link to="/sample" className={classes.link}>Examples</Link>
                </div>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
