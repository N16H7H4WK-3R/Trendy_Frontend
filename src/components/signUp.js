import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './componentCss/login.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';

// functions check for first name last name and username

function SignUp() {
    const buttonStyle = {
        width: '100%',
        height: '50px',
        overflow: 'hidden',
    };

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidfirstName, setIsValidFirstName] = useState(true);
    const [isValidlastName, setIsValidLastName] = useState(true);
    const navigate = useNavigate();

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

    const validateUsername = (value) => {
        setIsValidUsername(value.trim() !== ''); // check for non-empty username
    };

    const validateFirstName = (value) => {
        setIsValidFirstName(value.trim() !== ''); // check for non-empty first name
    };

    const validateLastName = (value) => {
        setIsValidLastName(value.trim() !== ''); // check for non-empty last name
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        validateUsername(value);
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

    const handlefirstNameChange = (e) => {
        const value = e.target.value;
        setFirstName(value);
        validateFirstName(value);
    };

    const handlelastNameChange = (e) => {
        const value = e.target.value;
        setLastName(value);
        validateLastName(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !firstName || !lastName) {
            showToast('Please fill in all the details.', 'error');
            return;
        }

        if (!isValidUsername || !isValidEmail || !isValidPassword || !isValidfirstName || !isValidlastName) {
            showToast('Please enter valid information.', 'error');
            return;
        }

        try {
            // POST request to the signup endpoint
            const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
                username: username,
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName,
            });

            if (response.status === 201) {
                showToast('Sign Up Successful!', 'success');
                navigate('/');
            } else {
                showToast('Sign Up failed. Please check your credentials.', 'error');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            showToast('An error occurred while signing up. Please try again later.', 'error');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="login-container" style={{ maxWidth: '100', marginTop: '80px' }}>
                <MDBContainer fluid className="p-3 my-5">
                    <MDBRow>
                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Login" />
                        </MDBCol>
                        <MDBCol col='4' md='6'>
                            <form onSubmit={handleSubmit}>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='First name'
                                    id='firstNameFormControlLg'
                                    type='text'
                                    size="lg"
                                    value={firstName}
                                    onChange={handlefirstNameChange}
                                    className={!isValidfirstName ? 'is-invalid' : ''}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Last name'
                                    id='lastNameFormControlLg'
                                    type='text'
                                    size="lg"
                                    value={lastName}
                                    onChange={handlelastNameChange}
                                    className={!isValidlastName ? 'is-invalid' : ''}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Username'
                                    id='usernameFormControlLg'
                                    type='text'
                                    size="lg"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    className={!isValidUsername ? 'is-invalid' : ''}
                                />
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

                                <button className={styles.customButton} style={{ backgroundColor: 'green', ...buttonStyle }} size="lg" type="submit">
                                    Sign Up
                                </button>
                            </form>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">OR</p>
                            </div>

                            <button className={styles.customButton} size="lg" style={{ backgroundColor: '#3b5998', ...buttonStyle }}>
                                <MDBIcon icon="facebook" className="mx-2" />
                                Continue with Facebook
                            </button>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    );
}

export default SignUp;