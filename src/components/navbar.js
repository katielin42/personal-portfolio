import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './navbar.css';
// import {Button} from './Button';

function Navbar() {
    //Handling state changes on click.
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton=()=>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    //main block of code.
    return (
        <>
           <nav className = "navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Katie's Portfolio ᕕ( ᐛ )ᕗ
                    </Link>
                    <div className='menu-icon' onClick = {handleClick}>
                    <i className={click? 'fas fa-times-circle': "fas fa-hamburger"}/>
                    </div>
                    
                    <ul className={click? 'nav-menu active': 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to= '/' className= 'nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to= '/exp' className= 'nav-links' onClick={closeMobileMenu}>
                                Professional Experience
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to= '/projects' className= 'nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'> Projects</Button>} */}
                </div>
            </nav> 
        </>
    );
}

export default Navbar;
