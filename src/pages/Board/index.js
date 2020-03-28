import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'
import Chessboard from '../../Components/Chessboard'

import {Wrapper} from './styles'

const Board = () => {
    const [getDestination, setDestination] = useState(false)

    return (
        <Wrapper container justify="center">
            <Chessboard showDestinations={getDestination}/>
            <Grid container item  xs={5} justify="center">
                <Button variant="contained" color="primary" onClick={() => setDestination(!getDestination)} fullWidth>
                    Show possible destinations in 2 turns
                </Button>
            </Grid>
        </Wrapper>
    )
};

export default Board;
