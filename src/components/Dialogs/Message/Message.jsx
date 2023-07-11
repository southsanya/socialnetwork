// import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';
// import react from 'react';

const Message = (props) => {
    return (
        <div className={classes.message}>
        {props.content}
        </div>
    )
}

export default Message;