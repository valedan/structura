import { createMuiTheme } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  palette: {
    text: {
      // color-picked from wireframe
      primary: "#4b5669",
      secondary: "#6b7b92",
      disabled: grey[300]
    }
  }
});
