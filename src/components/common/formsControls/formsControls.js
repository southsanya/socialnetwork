import React from "react"
import classes from './formsControles.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    debugger;
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formcontrol + ' ' + (hasError ? classes.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formcontrol + ' ' + (hasError ? classes.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}