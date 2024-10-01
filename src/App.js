import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './components/MainPage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/auth/LoginForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegistrationForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/mainpage" element={<MainPage/>}/>
                <Route path="*" element={<MainPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
