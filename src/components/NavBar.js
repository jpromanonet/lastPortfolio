import React from 'react'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        justifyContent: "center",
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem: {
        padding: '5px',
        cursor: "pointer",
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Blog
                </Typography>
            </Toolbar>
    )
}

export default NavBar
