import { PaletteColorOptions, createTheme } from "@mui/material"




export const temaPadrao = createTheme ({
  
  palette: {
    
    primary: {
      main: "#000F7d",
      dark: "#002D9d",
      light:"#004D9d",
      contrastText: "#fff"
    },
    secondary: {
      main: "#D70911",
      dark: "#A00911",
      light:"#F11f28",
      contrastText: "#fff"
    },
     
    background: {
      default: "#f7f6f3",
      paper: "#fff"
    }
  }
});

export const temaBadge =createTheme ({
  components: {
    MuiBadge: {
      styleOverrides: {
        root: (props) => ({
          ...(props.color !== 'default' && { backgroundColor: 'white' }),
        })
    }
  }
}
});
