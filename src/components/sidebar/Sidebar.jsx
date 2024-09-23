import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faBook, faTrophy, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Навигация</h2>
            <ul>
                <li>
                    <Link to="/mainpage">
                        <FontAwesomeIcon icon={faHome} className="icon"/>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        <FontAwesomeIcon icon={faBook} className="icon"/>
                        Курсы
                    </Link>
                </li>
                <li>
                    <Link to="/achievements">
                        <FontAwesomeIcon icon={faTrophy} className="icon"/>
                        Достижения
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        Профиль
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
