import React, {useState} from 'react';
import './Dashboard.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faChartBar, faCog, faStore, faTachometerAlt, faTasks} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const CustomDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Простое состояние авторизации
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="custom-dashboard">
            <div className="sidebar">
                {isAuthenticated ? (
                    <div className="profile">
                        <img src="profile-image-url" alt="Profile" className="profile-img" />
                        <h2>James Gibson</h2>
                        <p>Front-end Developer</p>
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                ) : (
                    <div className="auth-buttons">
                        <button onClick={handleLogin} className="auth-button">Войти</button>
                        <button onClick={handleRegister} className="auth-button">Регистрация</button>
                    </div>
                )}
                <ul>
                    <li><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</li>
                    <li><FontAwesomeIcon icon={faTasks} /> Management</li>
                    <li><FontAwesomeIcon icon={faCog} /> Services</li>
                    <li><FontAwesomeIcon icon={faStore} /> Store</li>
                    <li><FontAwesomeIcon icon={faCalendarAlt} /> Schedule</li>
                    <li><FontAwesomeIcon icon={faChartBar} /> Statistics</li>
                </ul>
            </div>
    <div className="dashboard">
        <div className="dashboard-header">
            <h1>Dashboard</h1>
            <p>Daily - May 15th, 2015</p>
        </div>
        <div className="stats-overview">
            <div className="stat">
                <h3>340,108</h3>
                <p>Unique Views</p>
            </div>
            <div className="stat">
                <h3>25%</h3>
                <p>Visit and Stay</p>
            </div>
            <div className="stat">
                <h3>50%</h3>
                <p>Visit from Social</p>
            </div>
            <div className="stat">
                <h3>75%</h3>
                <p>Shares</p>
            </div>
        </div>
        <div className="charts">
            <div className="chart">Hourly Views</div>
            <div className="chart">Browsers</div>
        </div>
        <div className="info-grids">
            <div className="grid-item">Visitor Breakdown</div>
            <div className="grid-item">Download Reports</div>
            <div className="grid-item">Members</div>
            <div className="grid-item">Messages</div>
            <div className="grid-item">Alerts</div>
            <div className="grid-item">Media</div>
            <div className="grid-item">Switches</div>
            <div className="grid-item">Buttons</div>
            <div className="grid-item">Controls</div>
        </div>
    </div>
</div>
)
    ;
};

export default CustomDashboard;
