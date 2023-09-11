import React, { useState } from 'react';

function EditProfile() {
    const [profileImage, setProfileImage] = useState(null);

    // Function to handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
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
                                />
                                <input
                                    type="file"
                                    id="profileImageInput"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none'}}
                                />
                            </label>
                            <span className="font-weight-bold mt-4 text-black">John Doe</span>
                            <span className="text-black-50 mt-1">john_doe12@bbb.com</span>
                            <span className="text-black-50 mt-1">United States</span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-center back">
                                    <i className="fa fa-long-arrow-left mr-1 mb-2 text-black mx-2"></i>
                                    <h6 className="text-black">Back to home</h6>
                                </div>
                                {/* <h6 className="text-right text-black">Edit Profile</h6> */}
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="First name" /></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Last name" /></div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" /></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Phone number" /></div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Address" /></div>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Country" /></div>
                            </div>
                            <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
