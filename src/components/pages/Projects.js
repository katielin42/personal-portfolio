import React from 'react';
import '../../App.css';
import {Container, Row, Col, Card} from "react-bootstrap";
import test from '../../image-1.png'

export default function Projects(){
    return (    
    <div >
    <br />
    <Container className='card-container'>
    <Card className="text-center">
        <Card.Img src={test}>
        </Card.Img>
        <Card.Body>
        <Card.Title style={{fontSize:"30px"}}> Hardware Reliability Engineering Intern @ Cruise (GM) </Card.Title>
        <Card.Text style={{fontSize:"20px"}}>
            <p> May - Aug 2021</p>
            <p> The main project I worked consisted of creating a data pipeline to funnel raw data from board sensors in the cars to a centralised storage, and creating a front end visualisation dashboard in Looker. The main technologies used in this project is SQL ( Google BigQuery and Looker) to query and clean up the raw data. The data is then stored in a database up to 3 months for long term hardware component analysis. </p>
            <p> Due to the nature of this project, I was able to speak to many teams and learn more about vehicle hardware, such as fleet reliability, hardware/PCB testing , and data engineers. I juggled each team's inputs on what data they wanted from which boards, frequency, limitations...etc to determine an optimal implementation.</p>
            <p> Overall, this project queries & visualises data daily from 250~ vehicles across 2 states, increased internal data retention period by ~400%, and decreased data  clutter from ~11TiB/day to 708MiB/day. </p>
            <p> I also did a side project where I installed external sensors on vehicles with newer hardware to monitor the effect of ambient temperature on vehicle hardware. I worked with the TPM team to send those vehicles across two different states. </p>
        </Card.Text>
        </Card.Body>
    </Card>
    <br />
    <br />
    <Card className="text-center">
        <Card.Img src={test}>
        </Card.Img>
        <Card.Body>
        <Card.Title style={{fontSize:"30px"}}> Embedded Systems Firmware Intern @ Pygo.Inc</Card.Title>
        <Card.Text style={{fontSize:"20px"}}>
            <p> June - Sept 2020</p>
            <p> You will be able to find a brief showcase of my professional experiences, interests, and any relevant projects here! </p>
        </Card.Text>
        </Card.Body>
    </Card>
    <br />
    </Container>
</div>
    )
}