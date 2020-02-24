import React from 'react';
import PropTypes from 'prop-types';

const ResultScreen = ({ value }) => (
    <div className="result-screen">
        {value}
    </div>
)

ResultScreen.propTypes = {
    value: PropTypes.string.isRequired,
}

export default ResultScreen;