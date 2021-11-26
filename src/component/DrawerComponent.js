import React, {useState} from 'react'
//import { Drawer } from '@material-ui/core'
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
//import { withThemeCreator } from '@material-ui/styles';
//makeStyles imported from material ui
const useStyles = makeStyles((theme) => ({

    link: {
        textDecoration: 'none',
        color: 'blue',
        fontSize: '20px',
    },
    icon: {
        color: "white",
    }
}));
//const [openDrawer, setOpenDrawer]= useState (false); usestate will make the drawer with default of false
function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer]= useState (false);
    //one sample of aligning anchor='right'
    return (
        <>
            <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} anchor='right'>
                <List>
                    <ListItem onClick={()=> setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>HOME</Link>
                        </ListItemText>
                    </ListItem> <Divider/>
                    <ListItem onClick={()=> setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/sample" className={classes.link}>Samples</Link>
                        </ListItemText>
                    </ListItem><Divider/>

                    <ListItem onClick={()=> setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>ABOUT US</Link>
                        </ListItemText>
                    </ListItem><Divider/>

                    <ListItem onClick={()=> setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>CONTACT US</Link>
                        </ListItemText>
                    </ListItem><Divider/>

                    <ListItem onClick={()=> setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/faq" className={classes.link}>FAQ</Link>
                        </ListItemText>
                    </ListItem><Divider/>

                    <ListItem onClick={()=> setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/porfolio" className={classes.link}>Porfolio</Link>
                        </ListItemText>
                    </ListItem><Divider/>

                </List>
            </Drawer> 
            {/* <IconButton onClick={()=> setOpenDrawer(openDrawer?openDrawer:true)}> one method to make the opendrawer appear since default is false*/}
            <IconButton className={classes.icon} onClick={()=> setOpenDrawer(!openDrawer)}>  
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default DrawerComponent
