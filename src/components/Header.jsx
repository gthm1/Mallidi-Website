import {useState} from 'react';
import './Header.css';
import logo from '../assets/logo.svg';


import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>

            <nav className='navbar'>
                <ul>
                    <li><Link to="/construction">Construction</Link></li>
                    <li><Link to="/real-estate">Real Estate</Link></li>
                    <li><Link to="/real-estate">About Us</Link></li>
                    <li><Link to="/real-estate">Contact Us</Link></li>
                </ul>
            </nav>

            <div className='ham' onClick={() => setMenuOpen(!menuOpen)}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            {menuOpen && (
                <div className='menu'>
                    <div className='close-icon' onClick={() => setMenuOpen(false)}>✕</div>
                    <ul>
                        <li><h6>Construction</h6>
                            <ul>
                                <li><Link to="/homeDesigns">Home Designs</Link></li>
                                <li><Link to="/customDesigns">Custom Designs</Link></li>
                                <li><Link to="/knockDownRebuild">KnockDown Rebuild</Link></li>
                                <li><Link to="/houseAndLand">House and Land</Link></li>
                            </ul>
                        </li>
                        <li><h6>Real Estate</h6>
                            <ul>
                                <li><Link to="/houseForSale">Houses for Sale</Link></li>
                                <li><Link to="/landsForSale">Lands for Sale</Link></li>
                            </ul>
                        </li>
                        <li><h6>Contact Us</h6>
                            <ul>
                                <li>Email: enquiry@mallidi.com.au</li>
                                <li>Phone: 03 9573 8393</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
            }
        </header>
        </>
    );
};

export default Header