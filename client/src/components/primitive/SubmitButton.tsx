import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface SubmitButtonProps extends ButtonProps {
  icon: React.ReactNode;
  width: string;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  icon,
  width,
  children,
  ...props
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="secondary"
      sx={{
        padding: "8px",
        width: `clamp(120px, ${width}, 400px)`,
        margin: "0 auto",
        alignSelf: "flex-end",
        display: "flex",
        justifyContent: "center",
      }}
      endIcon={icon}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
