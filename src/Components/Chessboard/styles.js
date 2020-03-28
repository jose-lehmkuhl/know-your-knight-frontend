import  styled  from 'styled-components'
import { Grid } from '@material-ui/core'

export const CellContainer = styled.div`
    height: 64px;
    width: 64px;
    background-color: ${props => props.color === 'true' ? '#fff' : '#3f51b5'};
    display: flex;
    align-items: center;


    /* Cells border logic */
    border-top: ${({ coordinate }) => coordinate.includes('8') ? '1px solid #3f51b5' : ''};
    border-left: ${({ coordinate }) => coordinate.includes('A') ? '1px solid #3f51b5' : ''};
    border-right: ${({ coordinate }) => coordinate.includes('H') ? '1px solid #3f51b5' : ''};
    border-bottom: ${({ coordinate }) => coordinate.includes('1') ? '1px solid #3f51b5' : ''};


    &:hover {
        background-color: ${props => props.color === 'true' ? '#ddd' : '#303f9f'};
        cursor: pointer;
    }

    svg {
        color: ${props => props.color === 'true' ? '#3f51b5' : '#fff'};
    }
`

export const Wrapper = styled(Grid)`
    margin: 20px 20px;
`

