import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function GridExample() {
    const rowStyle = {
        margin: '10px 10px',
    };

    return (
        <>
            <Row xs={1} md={4} className="g-4" style={rowStyle}>
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bwallpaperhd.com%2Fwp-content%2Fuploads%2F2021%2F01%2FNashPoint.jpg&f=1&nofb=1&ipt=185ed3efaf4ef310136de0581a0a39bd86679f1be2f474651920772e039ef65a&ipo=images" />
                            {/* <Card.Body>
                            </Card.Body> */}
                            <Button variant="secondary" size="sm" style={{ borderRadius : '0px' }}>
                                Add to cart
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default GridExample;
