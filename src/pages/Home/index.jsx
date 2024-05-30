import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import homeLogo from '../../../public/images/home-logo.png'
import elsewhere from '../../../public/images/elsewhere.gif';
import emporium from '../../../public/images/2.png'
import './style.css';

function Home() {
    return (
        <Container className="home-page">
            <div id="home-logo">
                <img src={homeLogo} />
                {/* <img id="gif" src={elsewhere} />
                <img src={emporium}/> */}
            </div>
        </Container>
    );
}

export default Home;