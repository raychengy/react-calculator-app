import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ displayName, classNames, value, onClick }) => {
    let className = ['btn'];
    if (classNames) {
        className = [...className, ...classNames];
    }

    const handleOnClick = () => {
        onClick(value);
    };

    return (<button className={className.join(' ')} onClick={handleOnClick}>
        {displayName}
    </button>);
}

Button.propTypes = {
    displayName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    classNames: PropTypes.array,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button;