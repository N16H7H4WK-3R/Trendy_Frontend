import React from 'react';
import styles from './ShopDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';

const ShopDetails = () => {
    return (
        <>
            <div className={styles.container}>
                <Carousel className={styles.carousel}>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.images}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className={styles.product}>
                    <p style={{ color: 'black' }}>Women's Running Shoe</p>
                    <h1 style={{ color: 'black' }}>Nike Epic React Flyknit</h1>
                    <h2 style={{ color: 'black'}}>$150</h2>
                    <p className={styles.desc}>The Nike Epic React Flyknit foam cushioning is responsive yet lightweight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward but makes running feel fun, too.</p>
                    <div className={styles.buttons}>
                        <button className={styles.add}>Add to Cart</button>
                        <button className={styles.like}><span>♥</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShopDetails;
