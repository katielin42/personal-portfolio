import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
                <div className="footer-icon">
                <ul>
                    <li className="footer-icon">
                    <a className="links" href="https://stackoverflow.com/questions/57200956/add-link-to-font-awesome-icon-in-reactjs"> 
                        <i class="far fa-file"></i>
                    </a>
                    </li>
                    <li className="footer-icon">
                    <a className="links" href="https://stackoverflow.com/questions/57200956/add-link-to-font-awesome-icon-in-reactjs">
                        <i class="fab fa-linkedin"></i>  
                    </a>
                    </li>
                    <li className="footer-icon">
                    <a className="links" href="https://stackoverflow.com/questions/57200956/add-link-to-font-awesome-icon-in-reactjs">
                        <i class="fab fa-git-square"></i>
                    </a>
                    </li>    
                </ul>
                </div>
        </div>
    )
}

export default Footer
