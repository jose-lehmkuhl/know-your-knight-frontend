import  styled  from 'styled-components'
import { Link } from 'react-router-dom';


export const HeaderLink = styled(Link)`
    width: 100%;
    padding: 10px;
    text-decoration: none;
    border-radius: 8px 8px 0 0;
    color: #3f51b5;

    &:hover {
        color: #303f9f;
    }
`

