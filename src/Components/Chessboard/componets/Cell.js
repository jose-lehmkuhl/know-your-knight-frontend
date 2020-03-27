import React from 'react';
import { Grid } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'

import { CellContainer } from '../styles'

const Cell = ({color, withKnight, destination}) =>
    <CellContainer justify="center" color={color.toString()} destination={destination}>
        <Grid container justify="center">
            {withKnight ? <FontAwesomeIcon icon={faChessKnight} size="3x" /> : ''}
        </Grid>
    </CellContainer>

export default Cell;
