import  styled  from 'styled-components'
import { Grid, Typography,MobileStepper } from '@material-ui/core'

export const Wrapper = styled(Grid)`
    padding: 1rem;

    a {
        text-decoration: none;
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
    max-width: 600px;
`

export const HelpText = styled(Typography)`
    width: 100%;
    max-width: 600px;
    padding: 10px 0;
`

export const StyledStepper = styled(MobileStepper)`
    width: 100%;
    max-width: 600px;
`
