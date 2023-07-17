import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/formsControls/formsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginThunkCreator, logoutThunkCreator } from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import classes from '../common/formsControls/formsControles.module.css'

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
        if (props.isAuth) return <Navigate to='/main'/>
    }

    if (props.isAuth) return <Navigate to='/main'/>
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>


}

const maxLength20 = maxLengthCreator(20);
const maxLength10 = maxLengthCreator(10);


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'email'} validate={[required, maxLength20]} />
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'password'} validate={[required, maxLength10]} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox" />remember me
            </div>
            <div className={classes.formError}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator })(Login)