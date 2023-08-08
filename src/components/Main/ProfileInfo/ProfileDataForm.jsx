import React from "react";
import { Input } from '../../common/formsControls/formsControls';
import { reduxForm } from "redux-form";
import { Form } from "redux-form";
import { CreateField } from '../../../utils/helpers/createfield';
import classes  from './ProfileDataForm.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div>{error}</div>
            <div>
                Full Name:{CreateField('Full Name', 'fullName', [], Input)}
            </div>
            <div>
                Looking for a job:{CreateField(null, 'lookingForAJob', [], Input, 'checkbox')}
            </div>
            <div>
                Looking for why?:{CreateField('Reason', 'lookingForAJobDescription', [], Input)}
            </div>
            <div>
                About me:{CreateField('About Me', 'AboutMe', [], Input)}
            </div>
            <div>Contacts
                {Object.keys(profile.contacts).map(key => {
                    return <div>{key}:{CreateField('contact', 'contacts.'+key, [], Input)}</div>
                })}
            </div>
            <div><button>save</button></div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({
    form: 'profile'
})(ProfileDataForm)

export default ProfileDataFormRedux;