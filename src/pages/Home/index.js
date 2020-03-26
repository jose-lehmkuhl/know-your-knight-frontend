import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { ButtonWrapper } from './styles'

const Home = () => (
    <Grid container>
        <Grid container item xs={12} md={6} justify="center">
            <ButtonWrapper to="/help">
                <Button variant="contained"  fullWidth>
                    help
                </Button>
            </ButtonWrapper>
        </Grid>
        <Grid container item xs={12} md={6} justify="center">
            <ButtonWrapper to="/board">
                <Button variant="contained" fullWidth>
                    board
                </Button>
            </ButtonWrapper>
        </Grid>
    </Grid>
  );

export default Home;
