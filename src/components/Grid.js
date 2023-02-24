import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomBtn from './CustomBtn'

const styles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridGap: "1rem",
        padding: "0 5rem 0 5rem"
    },
    item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "white",
        boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
        borderRadius: "10px",
        padding: "1rem"
    }
})

function Grid(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <div>{icon}</div>
                <Typography variant="h5">{title}</Typography>
                <CustomBtn txt={btnTitle}/>
            </div>
        </div>
    )
}

export default Grid
