import React from 'react';
import renderer from 'react-test-renderer';

import Keypad from './Keypad';

const btnLayout = [
    [{ displayName: "C", value: "C", classNames: ["operator"] }, { displayName: <span>&larr;</span>, value: "bksp", classNames: ["operator"] }, { displayName: "%", value: "%", classNames: ["operator"] }, { displayName: <span>&divide;</span>, value: "/", classNames: ["operator"] }],
    [{ displayName: "9", value: "9", }, { displayName: "8", value: "8", }, { displayName: "7", value: "7", }, { displayName: <span>&times;</span>, value: "*", classNames: ["operator"] }],
    [{ displayName: "4", value: "4", }, { displayName: "5", value: "5", }, { displayName: "6", value: "6", }, { displayName: "+", value: "+", classNames: ["operator"] }],
    [{ displayName: "1", value: "1", }, { displayName: "2", value: "2", }, { displayName: "3", value: "3", }, { displayName: "-", value: "-", classNames: ["operator"] }],
    [{ displayName: "0", value: "0", }, { displayName: ".", value: ".", }, { displayName: "=", value: "=", classNames: ["btn--large"] }],
];

const onClick = jest.fn();

describe('<Keypad />', () => {
    describe('Using props', () => {
        it('renders without crashing', () => {
            const keypad = renderer.create(<Keypad btnLayout={btnLayout} onClick={onClick} />);
            expect(keypad.toJSON()).toMatchSnapshot();
        });
    })
});
