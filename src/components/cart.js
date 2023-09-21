import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [profileImage, setProfileImage] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

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
            firstName,
            lastName,
            email,
            country,
        };
        console.log(userData);
        navigate('/', { state: { firstName } });

        // fetch('/api/saveProfile', {
        //     method: 'POST',
        //     body: JSON.stringify(userData),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Profile saved:', data);
        //     })
        //     .catch(error => {
        //         console.error('Error saving profile:', error);
        //     });
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
                                        placeholder="Address"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;



// backend api added!!!!!!!



// import React, { useState } from "react";
// import styles from './componentCss/cart.module.css';

// const Product = (props) => {
//     const [quantity, setQuantity] = useState(0);

//     const decrementQuantity = () => {
//         if (quantity > 0) {
//             setQuantity(quantity - 1);
//             props.updateCartTotal(-props.price);
//         }
//     };

//     const incrementQuantity = () => {
//         setQuantity(quantity + 1);
//         props.updateCartTotal(props.price);
//     };

//     return (
//         <div className="product">
//             <img
//                 src="https://source.unsplash.com/800x600/?vest"
//                 alt="product"
//                 height="80"
//                 width="80"
//                 style={{ marginBottom: '1rem', marginLeft: '1rem', }}
//             />
//             <div className="mx-5">
//                 <span>{props.Title}</span>
//                 <p>{props.Description}</p>
//                 <p>Extras*</p>
//             </div>
//             <div className={styles.quantity}>
//                 <button className={styles.quantity_button} onClick={decrementQuantity}>-</button>
//                 <label>{quantity}</label>
//                 <button className={styles.quantity_button} onClick={incrementQuantity}>+</button>
//             </div>
//             <label className="price small">$ {props.price * quantity}</label>
//         </div>
//     );
// };

// const Cart = () => {
//     const [cartTotal, setCartTotal] = useState(0);

//     // Function to update the cart total based on product prices
//     const updateCartTotal = (priceDifference) => {
//         setCartTotal(cartTotal + priceDifference);
//     };

//     return (
//         <div className="master-container" style={{ marginTop: '80px' }}>
//             <div className={`${styles.custom} card cart`}>
//                 <label className="title my-3">Your cart</label>
//                 <div className="products">
//                     <Product price={600} Title="Product 1" Description="Description 1" updateCartTotal={updateCartTotal} />
//                     <Product price={750} Title="Product 2" Description="Description 2" updateCartTotal={updateCartTotal} />
//                 </div>
//             </div>

//             <div className={`${styles.custom} card coupons`}>
//                 <label className="title">Apply coupons</label>
//                 <form className="form my-3">
//                     <input
//                         type="text"
//                         placeholder="Apply your coupons here"
//                         className="input_field"
//                     />
//                     <button>Apply</button>
//                 </form>
//             </div>

//             <div className={`${styles.custom} card checkout`}>
//                 <label className="title my-3">Checkout</label>
//                 <div className="details">
//                     <span>Your cart subtotal:</span>
//                     <span>$ {cartTotal.toFixed(2)}</span>
//                     <span>Discount through applied coupons:</span>
//                     <span>0.00$</span>
//                     <span>Shipping fees:</span>
//                     <span>0.00$</span>
//                 </div>
//                 <div className="checkout--footer my-3 mx-2" style={{ borderRadius: '10px' }} >
//                     <label className="price">
//                         <sup>$</sup>{cartTotal.toFixed(2)}
//                     </label>
//                     <button className="checkout-btn">Checkout</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;
