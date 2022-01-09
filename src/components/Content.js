import React from 'react';
import './Mainsect.css';
import '../App.css';
import {Container, Row, Col, Card} from "react-bootstrap";

function Content() {
    return (
        
        <div >
            <br />
            <Container className='card-container'>
            <Card className="text-center">
                <Card.Body>
                <Card.Title> Who Am I? </Card.Title>
                <Card.Text>
                    <p> My name is Katie, I am in my junior year, pursuing a bachelors degree in electrical engineering at the University of Alberta, Canada. My degree focus is in electronics, but I like learning how to code in my spare time as well.</p>
                    <p> You will be able to find a brief showcase of my professional experiences, interests, and any relevant projects here! </p>
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            </Container>
        </div>
    )
}

export default Content;
