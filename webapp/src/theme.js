import { createMuiTheme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  // color-picked from wireframe
  palette: {
    primary: {
      light: "#bee3f8",
      main: "#1976d2",
      contrastText: "white"
    },
    text: {
      primary: "#4b5669",
      secondary: "#6b7b92",
      disabled: grey[300]
    }
  }
});
