import React from "react";
import { Stack, Button, Snackbar, Alert } from "@mui/material";
import ImagePreview from "./ImagePreview";
import usePicturesField from "../hooks/usePicturesField";
import { PicturesFieldProps } from "../utils/types";
import { AddImagesButtonStyle } from "../utils/styleConstants";

const PicturesField: React.FC<PicturesFieldProps> = ({
  maxPictures,
  onPicturesChange,
}) => {
  const {
    pictures,
    error,
    snackbarOpen,
    fileInputRef,
    handleFileChange,
    handleRemovePicture,
    handleButtonClick,
    handleSnackbarClose,
  } = usePicturesField(maxPictures, onPicturesChange);

  return (
    <Stack sx={{ padding: "10px" }}>
      <ImagePreview pictures={pictures} onRemovePicture={handleRemovePicture} />

      <Button
        variant="outlined"
        color="primary"
        onClick={handleButtonClick}
        style={AddImagesButtonStyle("40%")}
      >
        Add Images
      </Button>

      {/* This is the actual input, covered by custom button for better UI, using useRef */}
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default PicturesField;
