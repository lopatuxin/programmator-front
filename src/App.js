import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/auth/LoginForm';
import {ThemeProvider} from "@mui/material";
import theme from './Theme';

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
