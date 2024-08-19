import { Button, Box, useTheme } from "@mui/material";
import { useAppDispatch } from "./redux/hooks";
import { toggleTheme } from "./redux/themeSlice";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" color="primary" onClick={handleToggleTheme}>
        Toggle {theme.palette.mode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Box sx={{ mt: 2 }}>Current mode: {theme.palette.mode}</Box>
      <Box sx={{ mt: 2 }}>
        <Button onClick={() => changeLanguage("en")} sx={{ mr: 1 }}>
          English
        </Button>
        <Button onClick={() => changeLanguage("ar")}>ar</Button>
      </Box>
      {t("test")}
    </Box>
  );
};

export default App;
