import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogsInfo/DialogsInfo';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/formsControls/formsControls';
import { required } from '../../utils/validators/validators';

// const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={classes.formWrapper}>
        <Field component={Textarea} name={'newMessageBody'} placeholder='Your Message' className={classes.main__pc_inp} validate={[required]} />
        <button className={classes.main__pc_but}>Send</button>
    </form>
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

const Dialogs = (props) => {

    let usersData = props.dialogs.users.map(user => <DialogItem name={user.username} id={user.id} />)
    let messagesData = props.dialogs.messages.map(message => <Message content={message.content} />)

    const onSubmit = (formData) => {
        console.log(formData)
        props.messageSender(formData.newMessageBody);
    }

    if (props.isAuth === false) return <Navigate to={'/login'} />

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogscontainer}>
                <div className={classes.dialogs}>
                    <div className={classes.dialogsitems}>
                        {usersData}
                    </div>
                    <div className={classes.dialogsmessages}>
                        <div className={classes.messageWrapper}>
                        {messagesData}
                        </div>
                        <AddMessageReduxForm onSubmit={onSubmit} className={classes.formWrapper} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;