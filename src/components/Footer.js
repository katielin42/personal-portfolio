import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
                <div className="footer-icon">
                <ul>
                    <li className="footer-icon">
                    <a className="links" href="https://www.canva.com/design/DAEnff9uxRA/J9JmR42KreRsZGCt2W-mZA/view?utm_content=DAEnff9uxRA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"> 
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
                </ul>
                </div>
        </div>
    )
}

export default Footer
