import Carousel from 'react-bootstrap/Carousel';
import Spinner from './spinner'

function IndividualIntervalsExample() {
    return (
        <>
            <Spinner />
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default IndividualIntervalsExample;