import React, { useState, useEffect } from "react";
import styles from './componentCss/cart.module.css';

function Product({ product, updateCart }) {
    const [quantity, setQuantity] = useState(product.quantity);

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            updateCart(product.product_id, quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        updateCart(product.product_id, quantity + 1);
    };

    return (
        <div className="product">
            <img
                src={product.product_image_url}
                alt="product"
                height="80"
                width="80"
                style={{ marginBottom: '1rem', marginLeft: '1rem' }}
            />
            <div className="mx-5">
                <span>{product.product_id}</span>
                <p>Product Description</p>
                <p>Extras*</p>
            </div>
            <div className={styles.quantity}>
                <button className={styles.quantity_button} onClick={decrementQuantity}>-</button>
                <label>{quantity}</label>
                <button className={styles.quantity_button} onClick={incrementQuantity}>+</button>
            </div>
            <label className="price small">$ {product.product_price * quantity}</label>
        </div>
    );
}

function Cart() {
    const [cart, setCart] = useState([]);
    const [cartSubtotal, setCartSubtotal] = useState(0);

    useEffect(() => {
        // Fetch cart data (use HTTPS)
        fetch('http://127.0.0.1:8000/services/cart-data/', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${sessionStorage.getItem('token')}`,
            },
        })
            .then(async (response) => {
                if (!response.ok) {
                    // Handle HTTP error status
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setCart(data);
                calculateSubtotal(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
            });
    }, []);

    const updateCart = (productId, newQuantity) => {
        // Update cart in state when a product's quantity changes
        const updatedCart = cart.map(product => {
            if (product.product_id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });

        setCart(updatedCart);
        calculateSubtotal(updatedCart);
    };

    const calculateSubtotal = (cartData) => {
        const subtotal = cartData.reduce((total, product) => {
            return total + product.product_price * product.quantity;
        }, 0);

        setCartSubtotal(subtotal);
    };

    return (
        <div className="master-container" style={{ marginTop: '80px' }}>
            <div className={`${styles.custom} card cart`}>
                <label className="title my-3">Your cart</label>
                <div className="products">
                    {cart.map((product, index) => (
                        <Product
                            key={product.product_id}
                            product={product}
                            updateCart={updateCart}
                        />
                    ))}
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
                    <span>$ {cartSubtotal}</span>
                    <span>Discount through applied coupons:</span>
                    <span>0.00$</span>
                    <span>Shipping fees:</span>
                    <span>0.00$</span>
                </div>
                <div className="checkout--footer my-3 mx-2" style={{ borderRadius: '10px' }} >
                    <label className="price">
                        <sup>$</sup>{cartSubtotal}
                    </label>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
