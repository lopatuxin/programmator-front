import React from 'react';
import {useForm} from 'react-hook-form';
import {Avatar, Box, Button, Checkbox, Container, TextField, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onSubmit'
    });
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
            setErrorMessage('Ошибка входа: ' + error.message);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    position: 'absolute',
                    top: '210px', // Позиционирование над формой
                    left: '50%',
                    transform: 'translateX(-50%)', // Центрирование по горизонтали
                    bgcolor: '#33448A', // Цвет фона для аватара
                    borderRadius: '50%', // Круглая форма аватара
                    width: 80, // Размер аватара
                    height: 80,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{bgcolor: 'primary.main', width: 80, height: 80}}>
                    <AccountCircleIcon style={{fontSize: 60, color: '#ffffff'}}/>
                </Avatar>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#33448A',
                    padding: 4,
                    borderRadius: 5,
                    marginTop: '250px', // Отступ чтобы форма не пересекалась с аватаром
                }}
            >
                <Typography component="h1" variant="h5" color="white" sx={{marginTop: '20px'}}>
                    Вход
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 1}}>
                    <TextField
                        {...register('username', {required: 'Логин обязателен'})}
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                            },
                        }}
                    />
                    {errors.password && (
                        <Typography color="error" sx={{mt: 1, color: 'red'}}>
                            {errors.username.message}
                        </Typography>
                    )}
                    <TextField
                        {...register('password', {required: 'Пароль обязателен'})}
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                            },
                        }}
                    />
                    {errors.password && (
                        <Typography color="error" sx={{mt: 1, color: 'red'}}>
                            {errors.password.message}
                        </Typography>
                    )}

                    {errorMessage && (
                        <Typography color="error" sx={{mt: 2}}>
                            {errorMessage} {/* Вывод сообщения об ошибке */}
                        </Typography>
                    )}
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', color: 'white'}}>
                            <Checkbox value="remember" color="primary"/>
                            <Typography variant="body2">Запомнить меня</Typography>
                        </Box>
                        <Typography variant="body2" sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                textDecoration: 'underline',
                            }
                        }}>
                            Забыли пароль?
                        </Typography>
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{mt: 3, mb: 2, bgcolor: 'primary'}}
                    >
                        Вход
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginForm;
