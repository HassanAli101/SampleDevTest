import React from "react";
import { Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import PasswordInput from "./primitive/PasswordInput";
import { FieldValues, UseFormHandleSubmit, Control } from "react-hook-form";

interface LoginFormProps {
  control: Control<FieldValues>;
  errors: any;
  onSubmit: (data: { email: string; password: string }) => void; 
  handleSubmit: UseFormHandleSubmit<FieldValues>; 
}

const LoginForm: React.FC<LoginFormProps> = ({ control, errors, onSubmit, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button
        type="submit"
        >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
