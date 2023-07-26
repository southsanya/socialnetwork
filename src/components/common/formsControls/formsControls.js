import React from "react"
import classes from './formsControles.module.css'

export const Textarea = ({ input, meta: {touched, error}, ...props }) => {
    debugger;
    const hasError = touched && error
    return (
        <div className={classes.formcontrol + ' ' + (hasError ? classes.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error
    return (
        <div className={classes.formcontrol + ' ' + (hasError ? classes.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}