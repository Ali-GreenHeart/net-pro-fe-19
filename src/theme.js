import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#435072',
            light: 'rgb(86, 96, 122)'
        },
        secondary: {
            main: '#606F84',
            light: 'rgba(67, 80, 114, 0.1)'
        },
        info: {
            main: '#F4F4F4'
        },
    },
    typography: {
        h4: {
            fontWeight: 600
        },
        h5: {
            fontWeight: 600
        },
        body1: {
            fontSize: 20
        }
    }
})
export default theme;
