import React from 'react';
import './MainPage.css';

const CustomDashboard = () => {
    const progress = 50; // Пример прогресса по курсу
    const completedLessons = 5;
    const totalLessons = 10;

    return (
        <div className="home-page">
            <h1>Добро пожаловать, [Имя пользователя]!</h1>
            <div className="courses-section">
                <h2>Ваши курсы</h2>
                <div className="course-card">
                    <h3>Название курса</h3>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p>{completedLessons}/{totalLessons} уроков завершено</p>
                    <button>Продолжить курс</button>
                </div>
            </div>
            <div className="info-grids">
                <div className="grid-item">Статистика по курсам</div>
                <div className="grid-item">Завершенные курсы</div>
                <div className="grid-item">Достижения</div>
            </div>
        </div>
    );
};

export default CustomDashboard;
