import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { useDataContext } from './Contexts/MyContext';

const Grid = () => {
    const { API_URL } = useDataContext();
    const [itemsToLoad, setItemsToLoad] = useState(12);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/services/data/`, {
            method: 'GET',
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch product data');
                }
            })
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [API_URL]);

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

    const notifyCart = () => {
        showToast('Item added to cart.', 'success');
    };

    const notifyFavorite = () => {
        showToast('Item added to Favorite.', 'success');
    };



    const loadMoreItems = () => {
        const totalItems = productData.length;
        const newItemsToLoad = itemsToLoad + 6;
        const actualItemsToLoad = Math.min(newItemsToLoad, totalItems);
        setItemsToLoad(actualItemsToLoad);
    };

    console.log(productData.imageUrl);

    return (
        <>

            <ToastContainer />
            <InfiniteScroll
                dataLength={itemsToLoad}
                next={loadMoreItems}
                hasMore={itemsToLoad < productData.length}
                style={{ overflow: 'hidden' }}
            >
                <Row xs={2} md={6} className="g-2 gy-4 my-2 fixRows" style={{ marginLeft: '20px', overflow: 'hidden' }}>
                    {productData.slice(0, itemsToLoad).map((product, index) => (
                        <Col key={index}>
                            <div className="scard loading">
                                <div className="Scard">
                                    <Link to={`/Id/${index + 1}`}>
                                        <div className="Scard-img" style={{
                                            backgroundImage: `url(${product.imageUrl})`,
                                            backgroundSize: 'cover',
                                            height: '100px',
                                            width: '100%',
                                            borderRadius: '0.5rem',
                                            transition: '0.3s ease',
                                        }}>
                                        </div>
                                    </Link>
                                    <div className="Scard-info">
                                        <p className="text-title text-center">{product.productTitle}</p>
                                        <p className="text-body text-center">{product.productDescription}</p>
                                    </div>
                                    <div className="Scard-footer">
                                        <span className="text-title">Rs. {product.productPrice}</span>
                                        <button className="Scard-button heart" onClick={notifyFavorite}>
                                            <i className="fa fa-heart"></i>
                                        </button>
                                        <button className="Scard-button cart" onClick={notifyCart}>
                                            <i className="fa fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </InfiniteScroll>
        </>
    );
}

export default Grid;
