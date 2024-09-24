import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">Название сайта</h1>
                <nav className="header-nav">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/courses">Курсы</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                        <li><Link to="/logout">Выйти</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
