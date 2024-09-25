import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Темная тема
        primary: {
            main: '#00d9ff', // Основной цвет
        },
        secondary: {
            main: '#00ff6e', // Второстепенный цвет
        },
        background: {
            default: '#1e1e2f', // Цвет фона по умолчанию
            paper: '#2b2b3c',  // Цвет карточек и других поверхностей
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
    },
});

export default theme;
