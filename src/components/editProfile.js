import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function EditProfile() {
    const [profileData, setProfileData] = useState({
        profileImage: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phoneNumber: '',
    });

    const [logoutStatus, setLogoutStatus] = useState(null);
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

    const handleLogout = async () => {
        try {
            const token = sessionStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            const response = await axios.post(
                'http://127.0.0.1:8000/services/logout/',
                {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('token');
                showToast('Successfuly logged out!', 'success');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else if (response.status === 401) {
                await refreshAuthToken();
                handleLogout();
            } else {
                setLogoutStatus('Error logging out. Please try again.');
                console.error(response.data.error);
            }
        } catch (error) {
            setLogoutStatus('Error logging out. Please try again.');
            console.error(error);
        }
    };

    const refreshAuthToken = async () => {
        try {
            const token = sessionStorage.getItem('token');

            if (!token) {
                throw new Error('Token not found in session storage');
            }

            const response = await axios.post(
                'http://127.0.0.1:8000/services/refresh-token/',
                {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                const newToken = response.data.token;
                sessionStorage.setItem('token', newToken);
            } else {
                throw new Error('Token refresh failed');
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            throw error;
        }
    };

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            setProfileData({
                ...profileData,
                firstName: user.first_name.toUpperCase(),
                lastName: user.last_name.toUpperCase(),
                email: user.email,
                country: user.country,
                phoneNumber: user.phone_number,
                username: user.username,
                profileImage: 'http://127.0.0.1:8000' + user.profile_image,
            });
        }
    }, []);

    const handleFieldChange = (event, field) => {
        setProfileData({
            ...profileData,
            [field]: event.target.value,
        });
    };

    const handleImageUpload = (event) => {
        setProfileData({
            ...profileData,
            profileImage: event.target.value,
        });
    };

    const Home = () => {
        navigate('/');
    };

    const handleSaveProfile = async () => {
        const formData = new FormData();
        formData.append('first_name', profileData.firstName);
        formData.append('last_name', profileData.lastName);
        formData.append('email', profileData.email);
        formData.append('country', profileData.country);
        formData.append('phone_number', profileData.phoneNumber);

        // Check if a new profile image was selected
        if (profileData.profileImage instanceof File) {
            formData.append('profile_image', profileData.profileImage);
        }

        try {
            // Sending a PUT request to update the user's profile
            const response = await axios.put(
                'http://127.0.0.1:8000/services/edit-profile/',
                formData,
                {
                    headers: {
                        Authorization: `Token ${sessionStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.status === 200) {
                showToast('Profile updated successfully', 'success');
            } else {
                showToast('Failed to update profile', 'error');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            console.error('An error occurred while updating profile. Please try again later.');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container rounded bg-white mt-5">
                <div className="row profileCustom">
                    <div className="col-md-4 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <label htmlFor="profileImageInput" className="rounded-circle profile-image-container" style={{ marginTop: '6rem' }}>
                                <img
                                    className="rounded-circle profile-image"
                                    alt="profileImage"
                                    src={profileData.profileImage}
                                    width="120"
                                    height="120"
                                    style={{
                                        objectFit: 'cover',
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
                            <span className="font-weight-bold mt-4 text-black">
                                {profileData.firstName} {profileData.lastName}
                            </span>
                            <span className="text-black-50 mt-1" style={{ textTransform: 'lowercase' }}>
                                {profileData.email}
                            </span>
                            <span className="text-black-50 mt-1">{profileData.country}</span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-center back">
                                    <i className="fa fa-long-arrow-left mr-1 mb-2 text-black mx-2"></i>
                                    <h6 className="text-black" onClick={Home}>
                                        Back to home
                                    </h6>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First name"
                                        value={profileData.firstName}
                                        onChange={(e) => handleFieldChange(e, 'firstName')}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last name"
                                        value={profileData.lastName}
                                        onChange={(e) => handleFieldChange(e, 'lastName')}
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        value={profileData.email}
                                        onChange={(e) => handleFieldChange(e, 'email')}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone number"
                                        value={profileData.phoneNumber}
                                        onChange={(e) => handleFieldChange(e, 'phoneNumber')}
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        value={profileData.username}
                                        onChange={(e) => handleFieldChange(e, 'username')}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Country"
                                        value={profileData.country}
                                        onChange={(e) => handleFieldChange(e, 'country')}
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
