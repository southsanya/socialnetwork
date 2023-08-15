import React, { useCallback, useState } from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileDataFormRedux from './ProfileDataForm';

const userPhoto = "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png"

const ProfileInfo = React.memo(props => {

    let [editMode, setEditMode] = useState(false);

    const setEditModeTrue = useCallback(() => {
        setEditMode(true)
    }, [])
    const setEditModeFalse = useCallback(() => {
        setEditMode(false)
    }, [])

    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = useCallback((FormData) => {

        props.saveProfile(FormData)
        setEditMode(false)
    }, [props])
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
                    : <button className={classes.formBtn}>
                        <div className={classes.formWrapper}>
                        <input className={classes.customInput} type='file' onChange={onMainPhotoChange} />
                        </div>
                    </button>
                    }
                    
                </div>
            </div>
            <div className={classes.main__pc_content}>
                <div className={classes.main__pc_subtitle}>
                    {editMode
                        ? <ProfileDataFormRedux className={classes.formRedux} initialValues={props.profile} profile={props.profile} activateEditMode={setEditModeFalse} onSubmit={onSubmit} />
                        : <ProfileData className={classes.formData} profile={props.profile} isOwner={props.isOwner} activateEditMode={setEditModeTrue} />}
                </div>
            </div>
        </div>
    );
})


const ProfileData = (props) => {
    return (
        <div>
            <div><b>Full Name:</b> {props.profile.fullName}</div>
            <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            <div><b>Looking for why?:</b> {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'No description('}</div>
            <div><b>About me:</b> {props.profile.aboutMe}</div>
            <div><b>Contacts</b>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}>
                        {key} : {props.profile.contacts[key]}
                    </div>
                })}
            </div>
            <div>{!props.isOwner ? <button className={classes.formBtn} onClick={() => (props.activateEditMode())}>edit</button> : 'No owner'}</div>
        </div>
    )
}

export default ProfileInfo;
