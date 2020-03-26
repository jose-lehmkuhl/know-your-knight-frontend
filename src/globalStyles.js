import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Baloo+2&display=swap');

    *   {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body    {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Baloo 2', cursive;
        font-size: 16px;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }
`;
