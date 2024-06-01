import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="registration-container">
            <div className="registration-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="username">
                            <FontAwesomeIcon icon="user" />
                        </label>
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} placeholder="Ваше имя" />}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">
                            <FontAwesomeIcon icon="envelope" />
                        </label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} placeholder="Ваша почта" />}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            <FontAwesomeIcon icon="lock" />
                        </label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="password" placeholder="Пароль" />}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">
                            <FontAwesomeIcon icon="lock" />
                        </label>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="password" placeholder="Подтвердите пароль" />}
                        />
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                </form>
                <p>Уже есть аккаунт? <a href="#">Вход</a></p>
            </div>
        </div>
    );
};

export default RegistrationForm;
