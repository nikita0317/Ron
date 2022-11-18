import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        "fontFamily": "Poppins",
        body1: {
            '& b': {
                color: '#5FC88F'
            }
        },
        h6: {
            fontSize: '14px'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    background: 'linear-gradient(85.33deg, #5352B5 -20.5%, #9F7DDB 96.23%)',
                    borderRadius: '18px',
                    padding: '15px 30px',
                    textTransform: 'none'
                }
            }
        },
    }
});

export default theme;