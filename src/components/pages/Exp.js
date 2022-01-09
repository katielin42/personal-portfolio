import React from 'react';
import '../../App.css';
import {Container, Row, Col, Card} from "react-bootstrap";
import test from '../../image-1.png'

export default function Exp(){
    return (
        
        <div >
            <br />
            <Container className='card-container'>
            <Card className="text-center">
                <Card.Img src={test}>

                </Card.Img>
                <Card.Body>
                <Card.Title style={{fontSize:"30px"}}> Who Am I? </Card.Title>
                <Card.Text style={{fontSize:"20px"}}>
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