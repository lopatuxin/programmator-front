import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './LoginForm.css';
import {Link, useNavigate} from "react-router-dom";

const LoginForm = () => {
    const {control, handleSubmit} = useForm();
    const navigate = useNavigate();

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
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Success:', responseData);
            alert(responseData); // Вывод сообщения на экран
            navigate('/dashboard');
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed: ' + error.message); // Вывод сообщения об ошибке
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="email">
                            <FontAwesomeIcon icon="envelope"/>
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field}) => <input {...field} placeholder="Ваша почта"/>}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <FontAwesomeIcon icon="lock"/>
                        </label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({field}) => <input {...field} type="password" placeholder="Пароль"/>}
                        />
                    </div>
                    <button type="submit">Войти</button>
                </form>
                <p>Нет аккаунта? <Link to="/register">Регистрация</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
