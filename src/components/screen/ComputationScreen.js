import React from 'react';
import PropTypes from 'prop-types';

const ComputationScreen = ({ value }) => (
    <div className="computation-screen">
        {value}
    </div>
)

ComputationScreen.propTypes = {
    value: PropTypes.string.isRequired,
}

export default ComputationScreen;