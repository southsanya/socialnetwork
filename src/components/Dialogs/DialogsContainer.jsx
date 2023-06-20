// import { NavLink } from 'react-router-dom';
// import classes from './Dialogs.module.css';
// import react from 'react';
// import Message from './Message/Message';
// import DialogItem from './DialogsInfo/DialogsInfo';
// import React, { useContext } from 'react';
import { addMessageActionCreator, updateNewMessageTextContainer } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        messageSender: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (newMessage) => {
            dispatch(updateNewMessageTextContainer(newMessage))
        }
    }
}

const SuperDialogsContainer = connect( mapStateToProps , mapDispatchToProps ) (Dialogs);

export default SuperDialogsContainer;