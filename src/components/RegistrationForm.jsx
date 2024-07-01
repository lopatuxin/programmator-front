import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const { control, handleSubmit, formState: { errors }, getValues } = useForm();

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
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-box">
                <div className="registration-header">
                    <h2>Регистрация</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            rules={{ required: { value: true, message: "Имя обязательно" } }}
                            render={({ field }) => <input {...field} placeholder="Имя" />}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
                    </div>
                    <div className="input-group">
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            rules={{ required: { value: true, message: "Фамилия обязательна" } }}
                            render={({ field }) => <input {...field} placeholder="Фамилия" />}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
                    </div>
                    <div className="input-group">
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: { value: true, message: "Электронная почта обязательна" },
                                pattern: { value: /^\S+@\S+$/i, message: "Неверный формат электронной почты" }
                            }}
                            render={({ field }) => <input {...field} placeholder="Электронная почта" />}
                        />
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>
                    <div className="input-group">
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: { value: true, message: "Номер телефона обязателен" },
                                pattern: { value: /^[0-9]{10,}$/, message: "Неверный формат номера телефона" }
                            }}
                            render={({ field }) => <input {...field} placeholder="Номер телефона" />}
                        />
                        {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                    </div>
                    <div className="input-group">
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: { value: true, message: "Пароль обязателен" },
                                minLength: { value: 8, message: "Пароль должен быть не менее 8 символов" }
                            }}
                            render={({ field }) => <input {...field} type="password" placeholder="Пароль" />}
                        />
                        {errors.password && <span className="error-message">{errors.password.message}</span>}
                    </div>
                    <div className="input-group">
                        <Controller
                            name="confirmPassword"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: { value: true, message: "Подтверждение пароля обязательно" },
                                validate: value => value === getValues('password') || "Пароли не совпадают"
                            }}
                            render={({ field }) => <input {...field} type="password" placeholder="Подтвердите пароль" />}
                        />
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
                    </div>
                    <div className="checkbox-group">
                        <Controller
                            name="terms1"
                            control={control}
                            defaultValue={false}
                            rules={{ required: { value: true, message: "Необходимо согласие" } }}
                            render={({ field }) => (
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" {...field} />
                                    <label htmlFor="terms1">Я принимаю условия использования и политику конфиденциальности.</label>
                                </div>
                            )}
                        />
                        {errors.terms1 && <span className="error-message">{errors.terms1.message}</span>}
                        <Controller
                            name="terms2"
                            control={control}
                            defaultValue={false}
                            rules={{ required: { value: true, message: "Необходимо согласие" } }}
                            render={({ field }) => (
                                <div className="checkbox-wrapper">
                                    <input type="checkbox" {...field} />
                                    <label htmlFor="terms2">Я согласен получать новости и обновления.</label>
                                </div>
                            )}
                        />
                        {errors.terms2 && <span className="error-message">{errors.terms2.message}</span>}
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
