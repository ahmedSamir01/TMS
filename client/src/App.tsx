import { Button, Box, useTheme } from "@mui/material";
import { useAppDispatch } from "./redux/hooks";
import { toggleTheme } from "./redux/themeSlice";

const App: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" color="primary" onClick={handleToggleTheme}>
        Toggle {theme.palette.mode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Box sx={{ mt: 2 }}>Current mode: {theme.palette.mode}</Box>
      {/* Add your other components here */}
    </Box>
  );
};

export default App;
