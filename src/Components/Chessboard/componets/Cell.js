import React from 'react';
import { Grid } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight, faTimes } from '@fortawesome/free-solid-svg-icons'

import { CellContainer } from '../styles'

const Cell = ({color, withKnight, destination, setKnightPosition, coordinate}) =>
    <CellContainer justify="center" coordinate={coordinate} color={color.toString()} onClick={setKnightPosition}>
        <Grid container justify="center">
            {withKnight ? <FontAwesomeIcon icon={faChessKnight} size="3x" /> : ''}
            {destination && !withKnight ? <FontAwesomeIcon icon={faTimes} size="2x" /> : ''}
        </Grid>
    </CellContainer>
export default Cell;
