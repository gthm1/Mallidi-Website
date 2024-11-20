/*
import React, { useState, useEffect } from 'react';
*/
import styles from './HomeContentBlock.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const HomeContentBlock = ({ image, heading, para }) => {

    return (
        <div className={styles.contentBlock} >
            <img src={image} alt="Home page Image" className={styles.image}/>
            <h3>{heading}</h3>
            <p className={styles.para}>{para}</p>
            <Link to="/exploreMore" style={{ textDecoration: 'none' }}>  
                <button className={styles.button}>Explore More</button>
            </Link>
            
        </div>
    );
};

HomeContentBlock.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired
};

export default HomeContentBlock;
