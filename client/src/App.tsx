import Router from "./services/router/router";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #c8b6ff, #3b82f6, #1e40af)",
        minHeight: "100vh",
      }}
    >
      <Router />
    </Box>
  );
}

export default App;
