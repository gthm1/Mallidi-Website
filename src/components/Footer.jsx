import './Footer.css';
/*
import React from 'react';
*/
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Footer (){
    return(
        <>
            <div className='footer-section'>
                <div className='footer-logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='footer-content'>
                    {/* Column 1: Contact Us */}
                    <div className='footer-col'>
                        <h4>Contact Us</h4>
                        <p>Email: enquiry@mallidi.com.au</p>
                        <p>Phone: 03 9573 8393</p>

                        <h4>Leave Us a Message?</h4>
                        <form>
                            <input type="text" placeholder='Name' required/>
                            <input type="text" placeholder='Email' required/>
                            <textarea placeholder='Message' required></textarea>
                            <br />
                            <button type='submit'>Send</button>
                        </form>
                    </div>

                    {/* Column 2: Real Estate*/}
                    <div className='footer-col'>
                        <h4>Real Estate</h4>
                        <Link to="/houseForSale">Houses for Sale</Link>
                        <Link to="/landsForSale">Lands for Sale</Link>
                    </div>

                    {/* Column 3: Construction */}
                    <div className='footer-col'>
                        <h4>Construction</h4>
                        <Link to="/homeDesigns">Home Designs</Link>
                        <Link to="/customDesigns">Custom Designs</Link>
                        <Link to="/knockDownRebuild">KnockDown Rebuild</Link>
                        <Link to="/houseAndLand">House and Land</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;