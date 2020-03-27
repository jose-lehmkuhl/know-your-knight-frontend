import  styled  from 'styled-components'
import { Grid } from '@material-ui/core'

export const CellContainer = styled.div`
    height: 64px;
    width: 64px;
    background-color: ${props => props.color === 'true' ? 'orange' : 'brown'};
    border: ${props => props.destination ? '4px dashed #1C6EA4' : ''};
    display: flex;
    align-items: center;

    &:hover {
        background-color: black

    }
`

export const Wrapper = styled(Grid)`
    margin: 20px 20px;
`

