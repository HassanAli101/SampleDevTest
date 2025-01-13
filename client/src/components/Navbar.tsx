import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  title: string; 
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isOnFormPage = location.pathname === "/VehicleForm";
  const buttonLabel = isOnFormPage ? "View Submissions" : "Submit Vehicle";
  const buttonTarget = isOnFormPage ? "/VehicleView" : "/VehicleForm";

  const handleNavigation = () => {
    navigate(buttonTarget);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" onClick={handleNavigation}>
          {buttonLabel}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
