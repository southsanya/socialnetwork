import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/formsControls/formsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginThunkCreator, logoutThunkCreator } from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import classes from '../common/formsControls/formsControles.module.css'
import { CreateField } from "../../utils/helpers/createfield";

const Login = ({ isAuth, loginThunkCreator }) => {

    const onSubmit = (formData) => {
        loginThunkCreator(formData.email, formData.password, formData.rememberMe)
        if (isAuth) return <Navigate to='/main' />
    }

    if (isAuth) return <Navigate to='/main' />
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>


}

const maxLength20 = maxLengthCreator(20);
const maxLength10 = maxLengthCreator(10);


const LoginForm = ({ handleSubmit, error }) => {
    return <div>
        <form onSubmit={handleSubmit}>
            {CreateField('email', 'email', [required, maxLength20], Input)}
            {CreateField('password', 'password', [required, maxLength10], Input, 'password', null)}
            {CreateField(null, 'rememberMe', [], Input, 'checkbox', 'remember me')}
            <div className={classes.formError}>
                {error}
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator })(Login)