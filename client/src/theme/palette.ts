const colors = {
  main: "#00aaff",
  dark: "#15181a",
  red: "#d01f2e",
  blue: "#0288d1",
  lightBlue: "#b3e5fc",
  purple: "#a179f2",
  gray: "#8a9499",
  darkGray: "#727272",
  accent: "#0088cc",
};

export const createPalette = (mode: "light" | "dark") => ({
  mode,
  primary: {
    main: colors.main,
  },
  secondary: {
    main: colors.purple,
  },
  error: {
    main: colors.red,
  },
  background: {
    default: mode === "light" ? "#ffffff" : colors.dark,
    paper: mode === "light" ? "#f5f5f5" : "#1e2124",
  },
  text: {
    primary: mode === "light" ? colors.dark : "#ffffff",
    secondary: mode === "light" ? colors.darkGray : colors.gray,
  },
});
