import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00d9ff',
        },
        secondary: {
            main: '#00ff6e',
        },
        background: {
            default: '#1e1e2f',
            paper: '#2b2b3c',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

function App() {
    console.log("App component rendered"); // Отладочное сообщение
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/mainpage" element={<MainPage />} />
                    <Route path="*" element={<MainPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
