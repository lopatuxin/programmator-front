import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle, faVk, faYandex} from '@fortawesome/free-brands-svg-icons';
import './LoginForm.css';
import {Link, useNavigate} from "react-router-dom";
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
    const {control, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage('Ошибка входа: ' + (errorData.message || 'Ответ сети был неудачным'));
                return;
            }

            const responseData = await response.json();
            console.log('Success:', responseData);
            alert(responseData); // Вывод сообщения на экран
            navigate('/dashboard');
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Login failed: ' + error.message); // Установка сообщения об ошибке
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2>Вход в систему</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <div className="input-with-icon">
                            <FontAwesomeIcon icon={faEnvelope} className="input-icon"/>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({field}) => <input {...field} placeholder="Ваша почта"/>}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-with-icon">
                            <FontAwesomeIcon icon={faLock} className="input-icon"/>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({field}) => <input {...field} type="password" placeholder="Пароль"/>}
                            />
                        </div>
                    </div>
                    <button type="submit">Войти</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p><Link to="/forgot-password" className="forgot-password-link">Забыли пароль?</Link></p>
                <p>Или войдите через социальные сети:</p>
                <div className="social-login">
                    <FontAwesomeIcon icon={faGoogle} className="social-icon google"/>
                    <FontAwesomeIcon icon={faYandex} className="social-icon yandex"/>
                    <FontAwesomeIcon icon={faVk} className="social-icon vk"/>
                </div>
                <p>Нет аккаунта? <Link to="/register" className="register-link">Регистрация</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
