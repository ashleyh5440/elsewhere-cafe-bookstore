import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import homeLogo from '../../../public/images/home-logo.png'
import './style.css';

function Home() {
    return (
        <Container className="home-page">
            <div id="home-logo">
                <img src={homeLogo} />
            </div>
        </Container>
    );
}

export default Home;