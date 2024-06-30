import { createTheme } from "@mui/material";

const setTheme = ({mode = 'light'}) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#6C10A5",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(", ")
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    },

  });
}

const lightTheme = setTheme({mode: 'light',});
const darkTheme = setTheme({mode: 'dark',});

export {lightTheme, darkTheme};
