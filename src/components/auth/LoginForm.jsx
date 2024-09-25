import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {TextField, Button, Container, Typography, Box} from '@mui/material';
import {useNavigate, Link} from 'react-router-dom';

const LoginForm = () => {
    const {control, handleSubmit, formState: {errors}} = useForm();
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
            navigate('/mainpage');
        } catch (error) {
            setErrorMessage('Login failed: ' + error.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8}}>
                <Typography component="h1" variant="h5">
                    Вход в систему
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 1}}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{required: "Электронная почта обязательна"}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="Ваша почта"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Пароль обязателен",
                            minLength: {value: 8, message: "Пароль должен быть не менее 8 символов"},
                        }}
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="Пароль"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: '#28a745',
                            '&:hover': {
                                backgroundColor: '#218838',
                            },
                        }}
                    >
                        Войти
                    </Button>
                    {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                    <Link to="/forgot-password" style={{textDecoration: 'none'}}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#ffcc00',
                                '&:hover': {
                                    textDecoration: 'underline',
                                    color: '#ffcc00',
                                },
                            }}
                        >
                            Забыли пароль?
                        </Typography>
                    </Link>

                </Box>
            </Box>
        </Container>
    );
};

export default LoginForm;
