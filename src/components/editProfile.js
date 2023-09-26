import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProfile() {
    const [profileImage, setProfileImage] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();
    const [logoutStatus, setLogoutStatus] = useState(null);

    const handleLogout = () => {
        axios.post('http://127.0.0.1:8000/services/logout/', {}, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    navigate('/login');
                } else if (response.status === 401) {
                    refreshAuthToken()
                        .then(() => {
                            handleLogout();
                        })
                        .catch((error) => {
                            setLogoutStatus('Error logging out. Please try again.');
                            console.error(error);
                        });
                } else {
                    setLogoutStatus('Error logging out. Please try again.');
                    console.error(response.data.error);
                }
            })
            .catch((error) => {
                setLogoutStatus('Error logging out. Please try again.');
                console.error(error);
            });
    };


    const refreshAuthToken = () => {
        return axios.post('http://127.0.0.1:8000/services/refresh-token/', {
        }, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
    };



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(user.email);
            setCountry(user.country);
        }
    }, []);

    // Function to handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const Home = () => {
        navigate('/');
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleSaveProfile = () => {
        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            country: country,
        };

        // Send a PUT request to update the user's profile
        fetch('http://127.0.0.1:8000/services/login/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(userData),
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Profile updated successfully');
                } else {
                    console.error('Failed to update profile');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };



    return (
        <>
            <div className="container rounded bg-white mt-5">
                <div className="row profileCustom">
                    <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <label htmlFor="profileImageInput" className="rounded-circle profile-image-container" style={{ marginTop: '6rem' }}>
                                <img
                                    className="rounded-circle profile-image"
                                    alt="profileImage"
                                    src={profileImage || "https://rb.gy/5cf02"}
                                    width="120"
                                    height="120"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                                <input
                                    type="file"
                                    id="profileImageInput"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </label>
                            <span className="font-weight-bold mt-4 text-black">{firstName} {lastName}</span>
                            <span className="text-black-50 mt-1" style={{ textTransform: 'lowercase' }}>{email}</span>
                            <span className="text-black-50 mt-1">{country}</span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-center back">
                                    <i className="fa fa-long-arrow-left mr-1 mb-2 text-black mx-2"></i>
                                    <h6 className="text-black" onClick={Home} >Back to home</h6>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Country"
                                        value={country}
                                        onChange={handleCountryChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-5 text-right">
                                <button
                                    className="btn btn-primary profile-button"
                                    type="button"
                                    onClick={handleSaveProfile}
                                >
                                    Save Profile
                                </button>
                                {logoutStatus && <p>{logoutStatus}</p>}
                                <button
                                    className="btn btn-primary profile-button"
                                    type="button"
                                    onClick={handleLogout}
                                >
                                    LogOut
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
