import React from 'react';
import Cell from './Cell';
import { shallow } from 'enzyme';
import { faChessKnight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('Cell tests', () => {
    const withKnightWrapper = shallow(
        <Cell color={true} withKnight={true} destination={true} setKnightPosition={() => null} coordinate={'A1'} />
        );
    const withoutKnightWrapper = shallow(
        <Cell color={true} withKnight={false} destination={true} setKnightPosition={() => null} coordinate={'A1'} />
        );

    it('renders the knight icon correctly', () => {
        expect(withKnightWrapper.contains(<FontAwesomeIcon icon={faChessKnight} size="3x" />)).toBe(true);
    });

    it('should render the X icon correctly', () => {
        expect(withoutKnightWrapper.contains(<FontAwesomeIcon icon={faTimes} size="2x" />)).toBe(true);
    });

    it('should not render the X icon when renders the knight icon', () => {
        expect(withKnightWrapper.contains(<FontAwesomeIcon icon={faChessKnight} size="3x" />)).toBe(true);
        expect(withKnightWrapper.contains(<FontAwesomeIcon icon={faTimes} size="2x" />)).toBe(false);
    });
})
