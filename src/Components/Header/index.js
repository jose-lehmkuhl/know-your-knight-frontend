import React from 'react';
import { Grid,Typography } from '@material-ui/core'

import { HeaderLink } from './styles'

const Header = () => (
    <Grid container>
        <HeaderLink to="/">
            <Grid container item xs={12} md={6} justify="flex-start">
                <Typography variant="h5">
                    Knight Moves
                </Typography>
            </Grid>
        </HeaderLink>
    </Grid>
  );

export default Header;
