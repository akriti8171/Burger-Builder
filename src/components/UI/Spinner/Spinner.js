import React from 'react'
import classes from './Spinner.css'
const Spinner=()=>{
    return(
        <div className={classes.sk_chase}>
            <div className={classes.sk_chase_dot}></div>
            <div className={classes.sk_chase_dot}></div>
            <div className={classes.sk_chase_dot}></div>
            <div className={classes.sk_chase_dot}></div>
            <div className={classes.sk_chase_dot}></div>
            <div className={classes.sk_chase_dot}></div>
        </div>
    )
}

export default Spinner