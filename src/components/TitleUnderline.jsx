import './TitleUnderline.css';
import PropTypes from 'prop-types';

/*
import React from 'react';
*/

const TitleUnderline =  ({title}) => {
    return (
        <>
            <div className='real-estate-section'>
                <div className='heading'>
                    <h3>{title}</h3> {/* Dynamic title based on prop */}
                </div>
                <div className='custom-line'></div>
            </div>
        </>
    );
};

TitleUnderline.propTypes = {
    title: PropTypes.string.isRequired
};


export default TitleUnderline;
