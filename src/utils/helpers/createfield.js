import React from "react";
import { Field } from "redux-form";

export const CreateField = (placeholder, name, validators, component, type, text) => {
    return <div><Field component={component} name={name} placeholder={placeholder} validate={validators} type={type}/>{text}</div>
}