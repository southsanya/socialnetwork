import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';
import react from 'react';

const DialogItem = (props) => {
    return (
                <div className={ classes.item }>
                    <NavLink className={ navData => navData.isActive ? classes.active : classes.item } to={'/dialogs/' + props.id}>{props.name}</NavLink>
                </div>
    )
}

export default DialogItem;