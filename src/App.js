import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCogs, faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import RegistrationForm from "./RegistrationForm";

library.add(fab, faUser, faEnvelope, faLock, faCogs);

function App() {
    return (
        <div className="App">
            <RegistrationForm />
        </div>
    );
}

export default App;
