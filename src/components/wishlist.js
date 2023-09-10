import React from "react";
import styles from './componentCss/cart.module.css';

const Product = () => (
    <>
        <div className="product new my-3" style={{ borderBottom: '1px solid #000000c9' }}>
            <img
                src="https://source.unsplash.com/800x600/?vest"
                alt="product"
                height="80"
                width="80"
                style={{ marginBottom: '1rem', marginLeft: '1rem', }}
            />
            <div className="mx-5">
                <span>Product Title</span>
                <span>$23.99</span>
            </div>
            <div className={styles.favorite}><i className="fa fa-heart"></i></div>
        </div>
    </>
);

const Wishlist = () => {
    return (
        <div className="master-container" style={{ marginTop: '80px', minHeight: '85vh' }}>

            <div className={`${styles.custom} card cart`}>
                <label className="title my-3">Checkout</label>
                <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default Wishlist;