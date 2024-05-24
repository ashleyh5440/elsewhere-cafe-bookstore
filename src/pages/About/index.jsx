import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

function About() {
    return (
        <Container className="about-page">
            <Row>
                <Col id="left-a">
                    <h1>Elsewhere Emporium</h1>
                    <div>some kind of picture here</div>
                </Col>
                <Col id="description">
                        <p>Elsewhere Emporium exists not here or there, but on a plane outside of time and space. The doors to our shop are located all over the world, from the jungles of south-east Asia to the tundras of the far north. We are proud to serve customers of all species to meet their enchanting, cursing, necromancing, and bewitching needs.</p>
                </Col>
            </Row>
            <Row>
                <Col id="owner-bio">
                    <h3>Madam Moni</h3>
                    <p>Owner</p>
                    <br />
                    <p> Child of the Chosen, Woman of Wisdom, Lady of the Limitless, Madam Moni is the owner and keeper of records of Elsewhere Emporium. No one is really sure how old she is or where she comes from, just as no one is really sure when or where the Emporium first opened.</p>
                </Col>
                <Col id="owner-img">
                    <div>img here</div>
                </Col>
            </Row>
            <Row id="disclaimer">
                <p><strong>A word of caution:</strong><br />
                <br />
                We at Elsewhere Emporium are not liable for any deaths, injuries, demonic possessions, maimings, hauntings, or public humiliation resulting in use of any spells or magicking obtained from the shop. We do not guarantee the results will be as the user expected, as the forces that shape the universe are unpredictable and often have a puckish sense of humor; nor do we recommend any DIY spellwork as the outcomes can range from unpleasant to apocalyptic. All purchases final.</p>
            </Row>
        </Container>
    );
}

export default About;