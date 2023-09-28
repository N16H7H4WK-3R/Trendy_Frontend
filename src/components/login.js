import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [isValidForm, setIsValidForm] = useState(true);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        setIsValidForm(formData.username.trim() !== '' && formData.password.length >= 8);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        validateForm();

        if (!isValidForm) {
            showToast('Please enter valid information in all fields.', 'error');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/services/login/', formData);

            if (response.status === 200) {
                const { token, user } = response.data;
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('user', JSON.stringify(user));
                showToast('Log In Successful!', 'success');
                setTimeout(() => {
                    navigate('/editProfile');
                }, 3000);
            } else {
                showToast('Login failed. Please check your credentials.', 'error');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            showToast('An error occurred while logging in. Please try again later.', 'error');
        }
    };


    const buttonStyle = {
        width: '100%',
        height: '50px',
        overflow: 'hidden',
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
                                    label='Username'
                                    id='usernameFormControlLg'
                                    type='text'
                                    size="lg"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className={!isValidForm ? 'is-invalid' : ''}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Password'
                                    id='passwordFormControlLg'
                                    type='password'
                                    size="lg"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={!isValidForm ? 'is-invalid' : ''}
                                />

                                <div className="d-flex justify-content-between mx-4 mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    <a href="!#">Forgot password?</a>
                                </div>

                                <button className="custom-button" style={{ backgroundColor: 'green', ...buttonStyle }} size="lg" type="submit">
                                    Log in
                                </button>
                            </form>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">OR</p>
                            </div>

                            <button className="custom-button" size="lg" style={{ backgroundColor: '#3b5998', ...buttonStyle }}>
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

export default Login;
