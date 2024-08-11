import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ownerPic from '/images/madam-moni.png'
import logo from '/images/home-logo.png'
import flowerBorder from '/images/flower-border.png'
import door from '/images/logo.png'

import './style.css';

function About() {
    return (
        <Container className="about-page">
            <Row style={{height: "100vh"}}>
                <div id="left-a">
                    <img src={logo} className="animate__animated animate__fadeIn animate__slower animate__delay-1s"/>
                </div>
                <div id="description" className="animate__animated animate__backInRight animate__slow animate__delay-2s">
                        <p>Elsewhere Emporium exists not here or there, but on a plane outside of time and space. The doors to our shop are located all over the world, from the jungles of south-east Asia to the tundras of the far north. We are proud to serve customers of all species to meet their enchanting, cursing, necromancing, and bewitching needs.</p>
                </div>
            </Row>
            <img src={flowerBorder} style={{width: "100vw"}}/>
            <Row>
                <div id="title">
                    <h1 style={{color: "white", fontSize: "70px"}}>Madam Moja</h1>
                    <p>Owner</p>
                </div>
                <Col id="owner-bio">
                    <p> Child of the Chosen, Woman of Wisdom, Lady of the Limitless, Madam Moja is the owner and keeper of records of Elsewhere Emporium. No one is really sure how old she is or where she comes from, just as no one is really sure when or where the Emporium first opened.</p>
                    <img src={door} style={{width: "100px", marginTop: "30px"}} />
                </Col>
                <Col id="owner-img">
                    <img src={ownerPic} />
                    <br />
                    <p style={{padding: "0% 9%"}}>Above is an artistic rendering of Madam Moja. No photographs or video of the Madam exist, as all attempts to capture her exact visage have caused bounts of madness in those who tried.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;