import React from 'react';
import { Grid } from '@material-ui/core'

import Chessboard from '../../Components/Chessboard'

const Board = () => (
    <Grid container justify="center">
        <Chessboard />
    </Grid>
  );

export default Board;
