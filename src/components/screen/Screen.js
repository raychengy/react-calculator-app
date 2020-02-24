import React from 'react';
import PropTypes from 'prop-types';
import ResultScreen from './ResultScreen';
import ComputationScreen from './ComputationScreen';

const Screen = ({ equation, results }) => (
    <div className="screen">
        <ResultScreen value={results} />
        <ComputationScreen value={equation} />
    </div>
)

Screen.propTypes = {
    results: PropTypes.string.isRequired,
    equation: PropTypes.string.isRequired,
}

export default Screen;