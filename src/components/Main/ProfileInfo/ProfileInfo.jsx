import React, { useState } from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
// import ProfileStatus from './ProfileStatus'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import ProfileDataFormRedux from './ProfileDataForm';
import { mainAPI } from '../../../api/api';
// import { SaveProfileInfoThunkCreator } from '../../../Redux/maincontentReducer';

const userPhoto = "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png"

const ProfileInfo = React.memo(props => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (FormData) => {
        console.log(FormData)

        props.saveProfile(FormData)
        setEditMode(false)

    }
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.main__pc_block}>

            <div className={classes.infoBlock}>
                <div className={classes.main__pc_title}>
                    <div>{props.profile.fullName}</div>
                </div>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} alt=''></img>
                <div>{props.isOwner
                    ? 'false'
                    : <input className={classes.customInput} type='file' onChange={onMainPhotoChange} />
                    }
                    
                </div>
            </div>
            <div className={classes.main__pc_content}>

                <div className={classes.main__pc_subtitle}>
                    {/* <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /> */}
                    {editMode
                        ? <ProfileDataFormRedux className={classes.formRedux} initialValues={props.profile} profile={props.profile} activateEditMode={() => (setEditMode(false))} onSubmit={onSubmit} />
                        : <ProfileData className={classes.formData} profile={props.profile} isOwner={props.isOwner} activateEditMode={() => (setEditMode(true))} />}
                </div>
            </div>
        </div>
    );
})

const Contacts = (ContactsTitle, ContactsValue) => {
    return <div>
        {ContactsTitle} : {'-'}
    </div>
}

const ProfileData = (props) => {
    return (
        <div>
            <div>Full Name: {props.profile.fullName}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            <div>Looking for why?: {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'No description('}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Contacts
                {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}>
                        {key} : {props.profile.contacts[key] ? <a href={props.profile.contacts[key]}>click</a> : 'no('}
                    </div>
                })}
            </div>
            <div>{!props.isOwner ? <button className={classes.formBtn} onClick={() => (props.activateEditMode())}>edit</button> : 'No owner'}</div>
        </div>
    )
}

export default ProfileInfo;
