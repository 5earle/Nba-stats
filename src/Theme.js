import { createMuiTheme } from "@material-ui/core/styles"; //material-ui customization
import CssBaseline from "@material-ui/core/CssBaseline";

/*
 * LOGIC: centralize styles
 * override default primary and secondary colors
 * override default typography, and its varients ie h1,p, tab items
 */



const arcBlue = "#0074D9";
const arcGradient = "linear-gradient(to right, #00f260, #0575e6)";
const arcOrange = "#f24a00";
const arcGrey = "#868686";
const arcGreen = '#00d1b2';
const width = '100%';

export default createMuiTheme({

  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      green: arcGreen,
    },
    primary: {
      main: arcGreen,
      mainGradient: arcGradient
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: 'Poppins',
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem"
    },
    estimate: { //for the button
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: 'Poppins',
      fontSize: "2.5rem",
      color: arcBlue
    },
    h4: {
      fontFamily: 'Poppins',
      fontSize: "1.75rem",
      color: arcOrange,
      fontWeight: 700
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Poppins',
      color: arcBlue
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem"
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
      fontFamily: 'Poppins'
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
              `url(${"./floor.png"})`
        }
      }
    }
  }
});
