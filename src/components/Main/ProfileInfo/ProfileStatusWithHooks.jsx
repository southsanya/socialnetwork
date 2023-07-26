import React, { useEffect, useState } from "react";



export const ProfileStatusWithHooks = (props) => {

    let [editMode , setEditMode] = useState(false);
    let [status , setStatus] = useState(props.status);
    let activateEditMode = () => {
        setEditMode(true);
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onBlur={deactivateEditMode} onChange={onStatusChange} value={status} autoFocus={true}  />
                </div>
            }
        </>
    )
}