import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const KeypadRow = props => (
    <div className="keypad__row">
        {props.rowLayout.map(
            details => (
                <Button key={`btn__${details.value}`} {...details} onClick={props.onClick} />
            ))}
    </div>
)

KeypadRow.propTypes = {
    rowLayout: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default KeypadRow;