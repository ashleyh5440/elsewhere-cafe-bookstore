import React from "react";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'animate.css';
import Sparkles from 'react-sparkle';

import './style.css';

import logo from '../../../public/images/logo.png'

function Shopping() {
    const [showDisclaimer, setShowDisclaimer] = useState(true);
    const [showRows, setShowRows] = useState(false);

    const handleProceedClick = () => {
        setShowDisclaimer(false);
        setShowRows(true);
    };

    return (
       <section className="shopping-page">
            <Container>
                {showDisclaimer && (
                    <div id="disclaimer">
                        <img src={logo} />
                    <h4>A word of caution:</h4>
                    <p>We at Elsewhere Emporium are not liable for any deaths, injuries, demonic possessions, maimings, hauntings, or public humiliation resulting in use of any spells or magicking obtained from the shop. We do not guarantee the results will be as the user expected, as the forces that shape the universe are unpredictable and often have a puckish sense of humor; nor do we recommend any DIY spellwork as the outcomes can range from unpleasant to apocalyptic. All purchases are final.</p>
                    <Button variant="primary" onClick={handleProceedClick}>Proceed</Button>
                </div>
                )}
                {showRows && (
                    <Row className="animate__animated animate__fadeIn">
                        <Sparkles 
                        fadeOutSpeed={5}
                        flicker={false} />
                        <div className="box">
                            <h1>Books and Tarot</h1>
                            <p><NavLink to="/shopping/books">See all</NavLink></p>
                        </div>
                        <div className="box">
                            <h1>Ingredients and Herbs</h1>
                            <p><NavLink to="/shopping/ingredients">See all</NavLink></p>
                        </div>
                    </Row>
                /* <Row>
                    <div className="box">
                        <h1>Jewelry and Stones</h1>
                        <p><NavLink to="/shopping/stones">See all</NavLink></p>
                    </div>
                    <div className="box">
                        <h1>Oils, Salts, and Candles</h1>
                        <p><NavLink to="/shopping/oils">See all</NavLink></p>
                    </div>
                </Row> */
                )}
            </Container>
       </section>
    );
}

export default Shopping;