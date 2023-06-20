import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
// import react from 'react';
import Message from './Message/Message';
import DialogItem from './DialogsInfo/DialogsInfo';
import React, { useContext } from 'react';
import { addMessageActionCreator, updateNewMessageTextContainer } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


let newMessageElement = React.createRef();
const DialogsContainer = (props) => {

    let context = useContext(StoreContext);

    let messageSender = () => {
        context.dispatch(addMessageActionCreator())
    }
     let onMessageChange = (newMessage) => {
        context.dispatch(updateNewMessageTextContainer(newMessage));

    }
    return (
        <Dialogs
            messageSender={messageSender}
            onMessageChange={onMessageChange}
            users={context.getState().dialogs.users}
            messages={context.getState().dialogs.messages}
            newMessagesText={context.getState().dialogs.newMessagesText} 

        />
    )
}

export default DialogsContainer;