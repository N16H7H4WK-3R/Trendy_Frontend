import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
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

    const validateEmail = (value) => {
        // Regular expression for basic email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailRegex.test(value));
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email is valid before proceeding
        if (!isValidEmail) {
            alert('Please enter a valid email address.');
            return;
        }

        // Continue with form submission
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
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
                                />

                                <div className="d-flex justify-content-between mx-4 mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    <a href="!#">Forgot password?</a>
                                </div>

                                <button className="mb-2 wx-100" style={buttonStyle} size="lg" type="submit">
                                    Sign in
                                </button>
                            </form>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">OR</p>
                            </div>

                            <button className="mb-4 wx-100" size="lg" style={{ backgroundColor: '#3b5998', ...buttonStyle }}>
                                <MDBIcon fab icon="facebook-f" className="mx-2" />
                                Continue with Facebook
                            </button>

                            <button className="mb-4 wx-100" size="lg" style={{ backgroundColor: '#55acee', ...buttonStyle }}>
                                <MDBIcon fab icon="twitter" className="mx-2" />
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
