import React, { useState } from 'react';
import styles from './componentCss/login.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function Login() {
    const buttonStyle = {
        width: '100%',
        height: '50px',
        overflow: 'hidden',
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const showToast = (message, type) => {
        toast[type](message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
        });
    };

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailRegex.test(value));
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setIsValidPassword(value.length >= 8);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            showToast('Please fill the details.', 'error');
            return;
        }

        if (!isValidEmail || !isValidPassword) {
            showToast('Please enter a valid email and password.', 'error');
            return;
        }

        showToast('Sign In Successful!', 'success');
    };

    return (
        <>
            <ToastContainer />
            <div className="login-container" style={{ maxWidth: '100' }}>
                <MDBContainer fluid className="p-3 my-5">
                    <MDBRow>
                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Login" />
                        </MDBCol>
                        <MDBCol col='4' md='6'>
                            <form onSubmit={handleSubmit}>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Email address'
                                    id='emailFormControlLg'
                                    type='email'
                                    size="lg"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={!isValidEmail ? 'is-invalid' : ''}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Password'
                                    id='passwordFormControlLg'
                                    type='password'
                                    size="lg"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className={!isValidPassword ? 'is-invalid' : ''}
                                />

                                <div className="d-flex justify-content-between mx-4 mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    <a href="!#">Forgot password?</a>
                                </div>

                                <button className={styles.customButton} style={{ backgroundColor: 'green', ...buttonStyle }} size="lg" type="submit">
                                    Sign in
                                </button>
                            </form>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">OR</p>
                            </div>

                            <button className={styles.customButton} size="lg" style={{ backgroundColor: '#3b5998', ...buttonStyle }}>
                                <MDBIcon icon="facebook" className="mx-2" />
                                Continue with Facebook
                            </button>

                            <button className={styles.customButton} size="lg" style={{ backgroundColor: '#55acee', ...buttonStyle }}>
                                <MDBIcon icon="twitter" className="mx-2" />
                                Continue with Twitter
                            </button>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    );
}

export default Login;
