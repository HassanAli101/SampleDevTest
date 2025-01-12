import React, { useState } from "react";
import { Stack, Button, Typography } from "@mui/material";
import ImagePreview from "./ImagePreview";

interface PicturesFieldProps {
  maxPictures: number;
  onPicturesChange: (pictures: File[]) => void;
}

const PicturesField: React.FC<PicturesFieldProps> = ({
  maxPictures,
  onPicturesChange,
}) => {
  const [pictures, setPictures] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);

      const duplicateFiles = fileArray.filter((file) =>
        pictures.some((picture) => picture.name === file.name)
      );

      if (duplicateFiles.length > 0) {
        setError(
          `The following files already exist: ${duplicateFiles
            .map((file) => file.name)
            .join(", ")}`
        );
        return;
      }

      if (fileArray.length + pictures.length > maxPictures) {
        setError(`You can only upload up to ${maxPictures} pictures.`);
        return;
      }

      setError(null);
      const updatedPictures = [...pictures, ...fileArray];
      setPictures(updatedPictures);
      onPicturesChange(updatedPictures);
    }
  };

  const handleRemovePicture = (index: number) => {
    const updatedPictures = pictures.filter((_, i) => i !== index);
    setPictures(updatedPictures);
    onPicturesChange(updatedPictures);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Stack sx={{ padding: "10px" }}>
      <ImagePreview pictures={pictures} onRemovePicture={handleRemovePicture} />

      <Button
        variant="outlined"
        color="secondary"
        onClick={handleButtonClick} // Trigger file input manually
        style={{
          marginTop: "16px",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        Add Images
      </Button>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }} 
      />

      {error && (
        <Typography
          variant="body2"
          color="error"
          style={{
            marginTop: "8px",
            fontWeight: "bold",
            color: "#e74c3c",
          }}
        >
          {error}
        </Typography>
      )}
    </Stack>
  );
};

export default PicturesField;
