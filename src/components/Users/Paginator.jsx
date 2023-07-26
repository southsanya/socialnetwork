import React from "react";
import classes from './Users.module.css';


let Paginator = ({ onPageChanged, currentPage }) => {

    // let pagesCount = Math.ceil(totalUsersCount / pageSize)
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div>
            <button className={classes.prewBtn} onClick={() => { onPageChanged(currentPage - 1) }}>Prew</button>
            <button className={classes.prewBtn} onClick={() => { onPageChanged(currentPage + 1) }}>Next</button>
        </div>
    )
}
export default Paginator;