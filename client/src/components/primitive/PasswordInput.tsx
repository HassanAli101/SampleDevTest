import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordInputProps {
  field: any;
  error: boolean;
  helperText: string | undefined;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  field,
  error,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      {...field}
      label="Password"
      type={showPassword ? "text" : "password"}
      variant="outlined"
      error={error}
      helperText={helperText}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
