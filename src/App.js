import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCogs, faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm";

library.add(fab, faUser, faEnvelope, faLock, faCogs);

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="*" element={<RegistrationForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
