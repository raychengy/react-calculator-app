import React from 'react';
import renderer from 'react-test-renderer';

import Screen from './Screen';

const equation = '';
const results = "0";


describe('<Screen />', () => {
    describe('Using props', () => {
        it('renders without crashing', () => {
            const screen = renderer.create(<Screen
                equation={equation}
                results={results}
            />);
            expect(screen.toJSON()).toMatchSnapshot();
        });
    })
})