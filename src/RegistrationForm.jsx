import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
    return (
        <div className="registration-container">
            <div className="registration-box">
                <form>
                    <div className="input-group">
                        <label htmlFor="username">
                            <i className="fas fa-user"></i>
                        </label>
                        <input type="text" id="username" name="username" placeholder="Ваше имя" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">
                            <i className="fas fa-envelope"></i>
                        </label>
                        <input type="email" id="email" name="email" placeholder="Почта" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <i className="fas fa-lock"></i>
                        </label>
                        <input type="password" id="password" name="password" placeholder="Пароль" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">
                            <i className="fas fa-lock"></i>
                        </label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Подтвердите пароль" required />
                    </div>
                    <button type="submit">Регистрация</button>
                </form>
                <p>Уже зарегистрированы? <a href="#">Вход</a></p>
            </div>
        </div>
    );
};

export default RegistrationForm;
