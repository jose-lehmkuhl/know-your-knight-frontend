import React from 'react';
import { Grid } from '@material-ui/core'
import Cell from './Cell'

const Row = ({rowNumber,knightPosition, destinations, setKnightPosition}) => {

const renderRow = () => {
    const cellLetters = ['A','B','C','D','E','F','G','H']
    return cellLetters.map((letter, index) => {
        const coordinate = letter + rowNumber;

        return (
            <Cell
                key={coordinate}
                coordinate={coordinate}
                withKnight={knightPosition===coordinate}
                color={(rowNumber+index) % 2 === 0}
                destination={destinations.includes(coordinate)}
                setKnightPosition={() => setKnightPosition(coordinate)}
            />
        )
    })
}
    return(
        <Grid container justify="center">
            {renderRow()}
        </Grid>
    )
};

export default Row;
