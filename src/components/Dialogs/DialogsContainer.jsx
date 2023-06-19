import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
// import react from 'react';
import Message from './Message/Message';
import DialogItem from './DialogsInfo/DialogsInfo';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextContainer } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';


let newMessageElement = React.createRef();
const DialogsContainer = (props) => {

    let messageSender = () => {
        props.dispatch(addMessageActionCreator())
    }
     let onMessageChange = (newMessage) => {
        props.dispatch(updateNewMessageTextContainer(newMessage));

    }
    return (
        <Dialogs
            messageSender={messageSender}
            onMessageChange={onMessageChange}
            users={props.store.dialogs.users}
            messages={props.store.dialogs.messages}
            newMessagesText={props.store.dialogs.newMessagesText} 

        />
    )
}

export default DialogsContainer;