import React from 'react';

import {  Wrapper } from './styles'

import Row from './componets/Row'

const Chessboard = ({knightPosition,destinations}) => {
    destinations =['A1','B2','C3','C4', 'D7', 'G3']
    knightPosition = 'F8'
    const renderRows = () => {
        const rows = []
        for (let i = 8; i > 0; i--) {
            rows.push(
                <Row
                    key={i}
                    knightPosition={knightPosition}
                    destinations={destinations.filter(cell => cell.includes(`${i}`))}
                    rowNumber={i}
                />
            )
        }

        return rows
    }

    return(
        <Wrapper container justify="center">
            {renderRows()}
        </Wrapper>
    )
};

export default Chessboard;
