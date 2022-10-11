import React from 'react';
import '../App.css';
import {Container, Row, Col, Card} from "react-bootstrap";

function Content() {
    return (
        
        <div >
            <br />
            <Container className='card-container'>
            <Card className="text-center">
                <Card.Body>
                <Card.Title style={{fontSize:"30px"}}> Who Am I? </Card.Title>
                <Card.Text style={{fontSize:"20px"}}>
                    <p> My name is Katie, I am in my final year, pursuing a bachelors degree in electrical engineering at the University of Alberta, Canada. My degree focus is in electronics, but I like learning how to code in my spare time as well! </p>
                    <p> You will be able to find a brief showcase of my professional experiences, interests, and any relevant projects here! If you are interested in what you see, feel free to take a further a look at my up-to-date resume, as well as LinkedIn & GitHub in the footer! </p>
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            </Container>
        </div>
    )
}

export default Content;
