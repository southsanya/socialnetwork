import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
// import react from 'react';
import Message from './Message/Message';
import DialogItem from './DialogsInfo/DialogsInfo';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextContainer } from '../../Redux/dialogsReducer';


let newMessageElement = React.createRef();
const Dialogs = (props) => {

    let messageSender = () => {
        props.messageSender();
    }
 
   let usersData = props.users.map( user => <DialogItem name={user.username} id={user.id}/> )
   let messagesData = props.messages.map( message => <Message content={message.content}/> )

    let onMessageChange = (e) => {
        let newMessage = e.target.value;
        props.onMessageChange(newMessage);

    }
    return (
        <div className={classes.dialogscontainer}>
         <div className={classes.dialogs}>
           <div className={classes.dialogsitems}>
               {usersData}
           </div>
           <div className={classes.dialogsmessages}>
               {messagesData}
               <div>
               <div className={classes.main__pc_input}>
                  <input ref={newMessageElement} className={classes.main__pc_inp} onChange={onMessageChange} value={props.newMessagesText}></input>
               </div>
               <button onClick={ messageSender } className={classes.main__pc_but}>Send</button>
               </div>
           </div>
         </div>
        </div>
    )
}

export default Dialogs;