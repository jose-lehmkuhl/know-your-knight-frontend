import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core'
import { ButtonWrapper } from './styles'

import chessboard from '../../assets/images/chessboard.png';


const Home = () => (
    <Grid container>
        <Grid container item xs={12} justify="center">
            <ButtonWrapper to="/board">
                <Button variant="contained" color="primary" fullWidth>
                    <Grid container item direction='column' alignItems="center" justify="center">
                        <img src={chessboard}/>
                        <Typography>go to board</Typography>
                    </Grid>
                </Button>
            </ButtonWrapper>
        </Grid>
        <Grid container item xs={12} justify="center">

            <ButtonWrapper to="/help">
                <Button variant="contained"  fullWidth>
                    help
                </Button>
            </ButtonWrapper>
        </Grid>
    </Grid>
  );

export default Home;
