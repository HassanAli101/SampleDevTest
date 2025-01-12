import React from "react";
import { Controller } from "react-hook-form";
import { TextField, Button, Stack, Typography } from "@mui/material";
import PasswordInput from "./primitive/PasswordInput";
import { useLoginForm } from "../hooks/useLoginForm";

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  customError?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, customError }) => {
  const { control, handleSubmit, errors } = useLoginForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput
              field={field}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />

        {customError !== "" && (
          <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
            {customError}
          </Typography>
        )}
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          sx={{
            padding: "8px",
            width: "80%",
            display: "block",
            margin: "0 auto",
          }}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
