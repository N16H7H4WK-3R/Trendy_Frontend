import React from 'react';
import styles from './componentCss/productDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopDetails = (props) => {
    const notifyCart = () => toast.success('Item added to cart !', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
    });

    const notifyFav = () => toast.success('Item added to favorite ♥', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
    });

    const handleAddToCartClick = () => {
        notifyCart();
    };

    const handleAddToFavClick = () => {
        notifyFav();
    };

    return (
        <>
            <div className={styles.container}>
                <Carousel className={styles.carousel}>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src={props.imageUrl}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src={props.imageUrl1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src={props.imageUrl2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src={props.imageUrl3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className={styles.product}>
                    {/* <p style={{ color: 'black' }}>{props.one}</p> */}
                    <h1 style={{ color: 'black' }}>{props.productTitle}</h1>
                    <h2 style={{ color: 'black' }}>{props.productPrice}</h2>
                    <p className={styles.desc}>{props.productDescription}</p>
                    <div className={styles.buttons}>
                        <button className={styles.add} onClick={handleAddToCartClick}>Add to Cart</button>
                        <button className={styles.like} onClick={handleAddToFavClick}><span>♥</span></button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ShopDetails;
