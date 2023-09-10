import React, { useState } from "react";
import styles from './componentCss/cart.module.css';

const Product = (props) => {
    const [quantity, setQuantity] = useState(0);

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            props.updateCartTotal(-props.price);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        props.updateCartTotal(props.price);
    };

    return (
        <div className="product">
            <img
                src="https://source.unsplash.com/800x600/?vest"
                alt="product"
                height="80"
                width="80"
                style={{ marginBottom: '1rem', marginLeft: '1rem', }}
            />
            <div className="mx-5">
                <span>{props.Title}</span>
                <p>{props.Description}</p>
                <p>Extras*</p>
            </div>
            <div className={styles.quantity}>
                <button className={styles.quantity_button} onClick={decrementQuantity}>-</button>
                <label>{quantity}</label>
                <button className={styles.quantity_button} onClick={incrementQuantity}>+</button>
            </div>
            <label className="price small">{props.price * quantity}</label>
        </div>
    );
};

const Cart = () => {
    const [cartTotal, setCartTotal] = useState(0);

    // Function to update the cart total based on product prices
    const updateCartTotal = (priceDifference) => {
        setCartTotal(cartTotal + priceDifference);
    };

    return (
        <div className="master-container" style={{ marginTop: '80px' }}>
            <div className={`${styles.custom} card cart`}>
                <label className="title my-3">Your cart</label>
                <div className="products">
                    <Product price={10} Title="Product 1" Description="Description 1" updateCartTotal={updateCartTotal} />
                    <Product price={15} Title="Product 2" Description="Description 2" updateCartTotal={updateCartTotal} />
                </div>
            </div>

            <div className={`${styles.custom} card coupons`}>
                <label className="title">Apply coupons</label>
                <form className="form my-3">
                    <input
                        type="text"
                        placeholder="Apply your coupons here"
                        className="input_field"
                    />
                    <button>Apply</button>
                </form>
            </div>

            <div className={`${styles.custom} card checkout`}>
                <label className="title my-3">Checkout</label>
                <div className="details">
                    <span>Your cart subtotal:</span>
                    <span>{cartTotal.toFixed(2)}</span>
                    <span>Discount through applied coupons:</span>
                    <span>3.99$</span>
                    <span>Shipping fees:</span>
                    <span>4.99$</span>
                </div>
                <div className="checkout--footer my-3 mx-2" style={{ borderRadius: '10px' }} >
                    <label className="price">
                        <sup>$</sup>{cartTotal.toFixed(2)}
                    </label>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
