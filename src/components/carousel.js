import Carousel from 'react-bootstrap/Carousel';
import Grid from './shop';
import productData from './productData.json';

function IndividualIntervalsExample() {
    const { imageUrl, productTitle, productDescription, productPrice } = productData;

    return (
        <>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedS3MFZaLtF-R3l9Eol7qQLtN5t9CvkfywQ&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://rb.gy/iw56g"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://rb.gy/qu6ps"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Grid imageUrl={imageUrl} productDescription={productDescription} productTitle={productTitle} productPrice={productPrice} />
        </>
    );
}

export default IndividualIntervalsExample;