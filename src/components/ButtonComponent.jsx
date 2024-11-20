import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ButtonComponent = ({width, text, link}) => {
    // Using inline css to dynamically set the width
    const style = {
        width: width,
        padding: '10px 20px',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '14px',
        border: '2px solid #D4B46D',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };

const hoverStyle = {
    ...style,
    backgroundColor: '#D4B46D',
    color: 'black'
};

const [hover, setHover] = React.useState(false);


    return(
        <Link to={link} 
        style={hover ? hoverStyle : style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>{text}</Link>
    );
};

ButtonComponent.propTypes = {
    width: PropTypes.string,  // not required, defaults provided
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

ButtonComponent.defaultProps = {
    width: '150px'  // Default width if none provided
};


export default ButtonComponent;