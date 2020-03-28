import React from 'react';
import { Grid,Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'

import { HeaderLink } from './styles'

const Header = () => (
    <Grid container>
        <HeaderLink to="/">
            <Grid container item xs={12} justify="center" alignItems="center">
            <FontAwesomeIcon icon={faChessKnight} size="2x"/>
                <Typography variant="h4">
                    Knight Moves
                </Typography>
            <FontAwesomeIcon icon={faChessKnight} size="2x" flip="horizontal"/>
            </Grid>
        </HeaderLink>
    </Grid>
  );

export default Header;
