import { createTheme } from "@mui/material/styles";
import { createPalette } from "./palette";
import typography from "./typography";
import components from "./components";

export const createAppTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: createPalette(mode),
    typography,
    components,
  });
};
