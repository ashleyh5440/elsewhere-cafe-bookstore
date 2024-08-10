import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import './Books';
import Card from '../../components/Card';

import './style.css';

function Shopping() {
    return (
       <section className="shopping-page">
            <Container>
                <Row>
                    <Col>
                        <h1>Books and Tarot</h1>
                        <Carousel>
                            <Carousel.Item>
                                <div className="slide-item">
                                    <h3>item</h3>
                                    <div className="slide-img">image here</div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item2</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item3</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item4</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item5</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                            </Carousel.Item>
                        </Carousel>
                        <h4>See all</h4>
                    </Col>
                    <Col>
                        <h1>Ingredients and Herbs</h1>
                        <Carousel>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item2</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item3</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item4</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item5</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                        </Carousel>
                        <h4>See all</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            <h1>Jewelry and Stones</h1>
                            <Carousel>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item2</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item3</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item4</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item5</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <h4>See all</h4>
                    </Col>
                    <Col>
                            <h1>Oils, Salts, and Candles</h1>
                            <Carousel>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item2</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item3</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item4</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="slide-item">
                                        <h3>item5</h3>
                                        <div className="slide-img">image here</div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <h4>See all</h4>
                    </Col>
                </Row>
            </Container>
       </section>
    );
}

export default Shopping;