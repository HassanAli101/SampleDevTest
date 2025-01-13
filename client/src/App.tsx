import Router from "./services/router/router";
import { Box } from "@mui/material";
import { AppBackground } from "./utils/styleConstants";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        background: AppBackground,
        minHeight: "100vh",
      }}
    >
      <Router />
    </Box>
  );
}

export default App;
