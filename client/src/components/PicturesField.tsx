import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);

      // Check for duplicate file names
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

  return (
    <div>
      <Typography variant="body1">Upload Pictures</Typography>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: "8px" }}>
          {error}
        </Typography>
      )}
      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        style={{ marginTop: "16px" }}
      >
        {pictures.map((picture, index) => (
          <div key={picture.name} style={{ position: "relative" }}>
            <img
              src={URL.createObjectURL(picture)}
              alt={`Preview ${index + 1}`}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "4px",
                margin: "4px",
              }}
            />
            <Button
              variant="contained"
              color="error"
              size="small"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                padding: "2px",
              }}
              onClick={() => handleRemovePicture(index)}
            >
              X
            </Button>
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default PicturesField;
