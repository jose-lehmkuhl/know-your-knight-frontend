import React from 'react';
import Row from './Row';

import { shallow } from 'enzyme';

describe('Row tests', () => {
    const setKnightPosition = () => null
    const rowWrapper = shallow(
        <Row rowNumber={2}
            knightPosition={'A2'}
            destinations={['A2', 'A4']}
            setKnightPosition={setKnightPosition}
        />
        );

    it('renders 8 cells', () => {
        expect(rowWrapper.children().length).toBe(8);
    });
})
