import React from "react";
import { Controller } from "react-hook-form";
import { TextField, Button, Stack, Typography } from "@mui/material";
import { useSubmitVehicleForm } from "../hooks/useSubmitVehiceForm";
import PicturesField from "./PicturesField";

interface LoginFormProps {
  onSubmit: (data: {
    carModel: string;
    price: number;
    phoneNumber: number;
    maxPictures: number;
    pictures: File[];
  }) => void;
  customError?: string;
}

const VehicleForm: React.FC<LoginFormProps> = ({ onSubmit, customError }) => {
  const { control, handleSubmit, errors, maxPictures } = useSubmitVehicleForm();
  const [pictures, setPictures] = React.useState<File[]>([]);

  const handlePicturesChange = (updatedPictures: File[]) => {
    setPictures(updatedPictures);
  };

  const onSubmitForm = (data: {
    carModel: string;
    price: number;
    phoneNumber: number;
    maxPictures: number;
  }) => {
    onSubmit({ ...data, pictures });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Stack
        spacing={3}
        sx={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
      >
        <Controller
          name="carModel"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Car Model"
              variant="outlined"
              fullWidth
              error={!!errors.carModel}
              helperText={errors.carModel?.message}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Price"
              type="number"
              variant="outlined"
              fullWidth
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              type="number"
              variant="outlined"
              fullWidth
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          )}
        />
        <Controller
          name="maxPictures"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Max Number of Pictures"
              type="number"
              variant="outlined"
              fullWidth
              error={!!errors.maxPictures}
              helperText={errors.maxPictures?.message}
            />
          )}
        />
        <PicturesField
          maxPictures={maxPictures}
          onPicturesChange={handlePicturesChange}
        />
        {customError !== "" && (
          <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
            {customError}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default VehicleForm;
