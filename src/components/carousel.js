import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Grid from './shop';
import productData from './productDetailData.json';

function IndividualIntervalsExample() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <picture>
                        <source srcSet="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)" />
                        <source srcSet="https://dummyimage.com/1400x500/#007aeb/4196e5" media="(min-width: 769px)" />
                        <source srcSet="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)" />
                        <img src="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive_image" className="d-block img-fluid" />
                    </picture>
                    <Carousel.Caption>
                        <h3>First slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <picture>
                        <source srcSet="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)" />
                        <source srcSet="https://dummyimage.com/1400x500/#007aeb/4196e5" media="(min-width: 769px)" />
                        <source srcSet="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)" />
                        <img src="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive_image" className="d-block img-fluid" />
                    </picture>
                    <Carousel.Caption>
                        <h3>Second slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <picture>
                        <source srcSet="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)" />
                        <source srcSet="https://dummyimage.com/1400x500/#007aeb/4196e5" media="(min-width: 769px)" />
                        <source srcSet="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)" />
                        <img src="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive_image" className="d-block img-fluid" />
                    </picture>
                    <Carousel.Caption>
                        <h3>Third slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Grid productData={productData} />
        </>
    );
}

export default IndividualIntervalsExample;