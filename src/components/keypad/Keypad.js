import React from 'react';
import PropTypes from 'prop-types';
import KeypadRow from './KeypadRow';

const Keypad = props => (
    <section className="keypad">
        {props.btnLayout.map(
            (rowLayout, i) => (
                <KeypadRow key={`keypad__row__${i}`} rowLayout={rowLayout} onClick={props.onClick} />
            ))}
    </section>
)

Keypad.propTypes = {
    btnLayout: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Keypad;