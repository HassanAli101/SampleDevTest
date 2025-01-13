import React from "react";
import { Typography } from "@mui/material";

interface TextBoldProps {
  children: React.ReactNode;
}

const TextBold: React.FC<TextBoldProps> = ({ children }) => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      sx={{ fontWeight: "bold" }}
    >
      {children}
    </Typography>
  );
};

export default TextBold;
