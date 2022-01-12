import React from 'react';
import '../../App.css';
import {Container, Row, Col, Card} from "react-bootstrap";
import test from '../../image-1.png'
import nanofab from '../../image-2.jpg'
import opamp from '../../image-13.png'
import pcb from '../../image-8.png'
import fsm from '../../image-3.png'
import eesite from '../../image-7.png'
import mux from '../../image-11.png'
import dsbot from '../../image-14.png'
import '../Projects.css';

export default function Projects(){
    return (    
    <div >
    <br />
    <Container className='card-container'>
        <ul className='card-ul'>
            <li className='card-list'>
                <Card >
                    <Card.Img src={pcb}>
                    </Card.Img>
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> 
                        EcoCar Horn Board PCB
                        {/* hardcoding fonts before i figure out how to inherit the stuff correctly from css */}
                    </Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technologies Used: EAGLE ECAD, LTSpice</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />
    <br/>
            <li className='card-list'>
                <Card className="text-center">
                    <Card.Img src={eesite}>
                    </Card.Img>
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> Electrical Engineering Club Website</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technologies Used: Python(Django), HTML, CSS, jQuery, Nginx servers, SSH FTP</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />
    <br/>
            <li className='card-list'>
                <Card className="text-center">
                    <Card.Img src={mux}>
                    </Card.Img>
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> Digital Multiplexer Design</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technology used: Cadence</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />
    <br/>
            <li className='card-list'>
                <Card className="text-center">
                    <Card.Img src={opamp}>
                    </Card.Img>
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> Analogue Operational Amplifier Design</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technology used: LTSpice, Excel</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />
    <br/>
            <li className='card-list'>
                <Card className="text-center">
                    <Card.Img src={nanofab}>
                    </Card.Img>
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> Nanofabrication of Multilayer and MEMS Wafers</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technology used: Scanning Electron Microscope, Deep Bosch RIE etch machines, optical microscopes, 4-point power probe electrical testing stations</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />
    <br/>
            <li className='card-list'>
                <Card className="text-center">
                    <Card.Img src={fsm}>
                    </Card.Img>
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> Finite State Machine in VHDL</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technology used: ZYBO FPGA Dev Board, Xilinx VHDL</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />
    <br/>
            <li className='card-list'>
                <Card className="text-center">
                    <Card.Img src={dsbot}>
                    </Card.Img>
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> AI Discord Moderation Bot</Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technology used: Node.js, Discord.js, Google NLP Dialog Flow</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />
    <br/>
            <li className='card-list'>
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}> Last but not least, this portfolio website! </Card.Title>
                    <Card.Text style={{fontSize:"20px"}}>
                        <p> Technology used: React.js, Surge, Bootstrap</p>
                        <p> Built from scratch in just 2 days (but still going through iterations of bug fixes and development), I felt this would more accurately showcase my work visually. </p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </li>
    <br />

    </ul>
    </Container>
</div>
    )
}