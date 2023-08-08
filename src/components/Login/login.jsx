import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../common/formsControls/formsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { getCaptchaThunkCreator, loginThunkCreator, logoutThunkCreator } from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import { CreateField } from "../../utils/helpers/createfield";
import { mainAPI, secureAPI } from "../../api/api";
import classes from './login.module.css';

const Login = ({ isAuth, loginThunkCreator, captchaUrl }) => {

    const onSubmit = (formData) => {
        loginThunkCreator(formData.email, formData.password, formData.rememberMe)
        console.log(isAuth)
        if (isAuth) return <Navigate to='/main' />
    }
    getCaptchaThunkCreator();
    console.log(captchaUrl)

    if (isAuth) return <Navigate to='/main' />
    return <div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>


}
const maxLength20 = maxLengthCreator(20);
const maxLength10 = maxLengthCreator(10);


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return <div className={classes.loginWrapper}>
        <div className={classes.loginContainer}>
            <form onSubmit={handleSubmit} className={classes.formContainer}>
                <div className={classes.alertContainer}>
                    <p>You can also use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </div>
                <div className={classes.fieldContainer}>
                    {CreateField('email', 'email', [required, maxLength20], Input)}
                    {CreateField('password', 'password', [required, maxLength10], Input, 'password', null)}
                    <div className={classes.rememberMe}>
                        {CreateField(null, 'rememberMe', [], Input, 'checkbox')}
                    </div>
                </div>
                <div className={classes.captchaContainer}>
                    { captchaUrl && <img src={captchaUrl}/> }
                    {CreateField({ captchaUrl }, 'captcha', [], Input)}
                </div>
                <div className={classes.errorContainer}>
                    {error}
                </div>
                <div className={classes.buttonContainer}>
                    <button className={classes.loginBtn}>Login</button>
                </div>
            </form>
        </div>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator, getCaptchaThunkCreator })(Login)