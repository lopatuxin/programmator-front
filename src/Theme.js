import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // или 'dark' для темной темы
        background: {
            default: '#1C1C3D', // Цвет фона по умолчанию
            paper: '#33448A',  // Цвет карточек и других поверхностей
        },
        primary: {
            main: '#1976d2', // Основной цвет
        },
        secondary: {
            main: '#ff4081', // Второстепенный цвет
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Базовый шрифт
        h1: {
            fontSize: '2rem',
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'black',
                },
            },
        },
    },
});

export default theme;
