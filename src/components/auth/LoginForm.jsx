import React from 'react';
import {useForm} from 'react-hook-form';
import {Avatar, Box, Button, Checkbox, Container, TextField, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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
        <Container maxWidth="xs">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#33448A',
                    padding: 4,
                    borderRadius: 2,
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'primary'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" color="white">
                    Вход
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        sx={{backgroundColor: 'white'}}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{backgroundColor: 'white'}}
                    />
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
