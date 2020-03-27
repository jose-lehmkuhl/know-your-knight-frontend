import React from 'react';
import Routes from './routes'

import GlobalStyles from './styles/global'
import { AppWrapper } from './styles/App'
const App = () => (
    <AppWrapper className="App" elevation={6}>
        <Routes />
        <GlobalStyles/>
    </AppWrapper>
  );

export default App;
