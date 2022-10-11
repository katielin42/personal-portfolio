import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
                <div className="footer-icon">
                <ul>
                    <li className="footer-icon">
                    <a className="links" href="https://drive.google.com/file/d/1c4UvlDMgvxemgO52X4kLGTHNs9gJVZWq/view?usp=sharing"> 
                        <i class="far fa-file"></i>
                    </a>
                    </li>
                    <li className="footer-icon">
                    <a className="links" href="https://www.linkedin.com/in/katie-c-lin/">
                        <i class="fab fa-linkedin"></i>  
                    </a>
                    </li>
                    <li className="footer-icon">
                    <a className="links" href="https://github.com/katielin42">
                        <i class="fab fa-git-square"></i>
                    </a>
                    </li>    
                    <p className="footer-notes"> Copyright© 2022 Katie Lin. All rights reserved.</p>
                </ul>
                
                </div>
        </div>
    )
}

export default Footer
