import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link 
                to="/"
                className="navbar-logo"
                onClick={closeMobileMenu}
                >
                    VOYAGE <i className="fab fa-typo3"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to ='/' className='nav-links' onClick={closeMobileMenu}> 
                            Acceuil
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to ='/services' className='nav-links' onClick={closeMobileMenu}> 
                            Services
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to ='/products' className='nav-links' onClick={closeMobileMenu}> 
                            Produits
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> 
                            S'inscire
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>INSCRIVEZ VOUS!</Button>}
            </div>
        </nav>

    </>
  )
}

export default Navbar
