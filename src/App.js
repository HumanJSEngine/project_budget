import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Main from './Main';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
