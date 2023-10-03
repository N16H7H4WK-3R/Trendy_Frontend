import React, { useEffect, useState } from 'react';
import styles from './componentCss/productDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/services/',
});

const notify = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "dark",
    });
};

const ShopDetails = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState(null);
    const navigate = useNavigate();

    const handleAddToCartClick = async () => {
        try {
            const token = sessionStorage.getItem('token');

            if (!token) {
                navigate('/login');
                return;
            }

            const formData = new FormData();
            formData.append('item_id', productData.productId);
            formData.append('item_id', productData.productPrice);
            formData.append('item_id', productData.imageUrl);
            formData.append('quantity', 1);

            const response = await axiosInstance.post('cart/', formData, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            if (response.status === 201) {
                notify('Item added to cart !');
            } else {
                console.error('Error adding item to cart:', response);
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            if (error.response) {
                console.error('Response Data:', error.response.data);
                console.error('Response Status:', error.response.status);
            }
        }
    };

    useEffect(() => {
        axiosInstance.get(`detail/${productId}/`)
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, [productId]);

    return (
        <>
            {productData ? (
                <div className={styles.container}>
                    <Carousel className={styles.carousel}>
                        {[1, 2, 3].map((index) => (
                            productData[`imageUrl${index}`] && (
                                <Carousel.Item key={index}>
                                    <img
                                        className={styles.images}
                                        src={productData[`imageUrl${index}`]}
                                        alt={`Slide ${index}`}
                                    />
                                </Carousel.Item>
                            )
                        ))}
                    </Carousel>
                    <div className={styles.product}>
                        <h1 style={{ color: 'black' }}>{productData.productTitle}</h1>
                        <h2 style={{ color: 'black' }}>{productData.productPrice}</h2>
                        <p className={styles.desc}>{productData.productDescription}</p>
                        <div className={styles.buttons}>
                            <button className={styles.add} onClick={handleAddToCartClick}>Add to Cart</button>
                            <button className={styles.like} onClick={() => notify('Item added to favorite ♥')}><span>♥</span></button>
                        </div>
                    </div>
                </div>
            ) : null}
            <ToastContainer />
        </>
    );
};

export default ShopDetails;
