import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import './RegistrationForm.css';
import {faEnvelope, faLock, faPhone, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import InputField from "./input/InputField";

const RegistrationForm = () => {
    const {control, handleSubmit, formState: {errors}, getValues} = useForm();
    const [submitError, setSubmitError] = React.useState('');
    const [submitSuccess, setSubmitSuccess] = React.useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setSubmitError(errorData.message || 'Произошла ошибка при регистрации');
                return;
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
            setSubmitSuccess('Регистрация прошла успешно!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('Произошла ошибка: ' + error.message);
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-box">
                <div className="registration-header">
                    <h2>Регистрация</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {submitError && <div className="submit-error">{submitError}</div>}
                    {submitSuccess && <div className="submit-success">{submitSuccess}</div>}
                    <InputField
                        name="firstName"
                        placeholder="Имя"
                        icon={faUser}
                        control={control}
                        rules={{required: "Имя обязательно"}}
                        errors={errors}
                    />
                    <InputField
                        name="lastName"
                        placeholder="Фамилия"
                        icon={faUser}
                        control={control}
                        rules={{required: "Фамилия обязательна"}}
                        errors={errors}
                    />
                    <InputField
                        name="email"
                        placeholder="Электронная почта"
                        icon={faEnvelope}
                        control={control}
                        rules={{
                            required: "Электронная почта обязательна",
                            pattern: {value: /^\S+@\S+$/i, message: "Неверный формат электронной почты"}
                        }}
                        errors={errors}
                    />
                    <InputField
                        name="phone"
                        placeholder="Номер телефона"
                        icon={faPhone}
                        control={control}
                        rules={{
                            required: "Номер телефона обязателен",
                            pattern: {value: /^[0-9]{10}$/, message: "Неверный формат номера телефона"}
                        }}
                        errors={errors}
                    />
                    <InputField
                        name="password"
                        placeholder="Пароль"
                        icon={faLock}
                        type="password"
                        control={control}
                        rules={{
                            required: "Пароль обязателен",
                            minLength: {value: 8, message: "Пароль должен быть не менее 8 символов"}
                        }}
                        errors={errors}
                    />
                    <InputField
                        name="confirmPassword"
                        placeholder="Подтвердите пароль"
                        icon={faLock}
                        type="password"
                        control={control}
                        rules={{
                            required: "Подтверждение пароля обязательно",
                            validate: value => value === getValues('password') || "Пароли не совпадают"
                        }}
                        errors={errors}
                    />
                    <div className="checkbox-group">
                        <Controller
                            name="subscribeToNewsletter"
                            control={control}
                            defaultValue={false}
                            render={({field}) => (
                                <div className="checkbox-wrapper">
                                    <input id="subscribeToNewsletter" type="checkbox" {...field} />
                                    <label htmlFor="subscribeToNewsletter">Я согласен получать новости и
                                        обновления.</label>
                                </div>
                            )}
                        />
                        {errors.subscribeToNewsletter &&
                            <span className="error-message">{errors.subscribeToNewsletter.message}</span>}
                    </div>
                    <p>Уже есть аккаунт? <Link to="/login" className="login-link">Вход</Link></p>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
