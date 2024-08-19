import { Components, Theme } from "@mui/material/styles";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 20,
      },
    },
  },
  // Add overrides for more components as needed
};

export default components;
