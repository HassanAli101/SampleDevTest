import React from "react";
import { ImageListItem, IconButton, Box } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

interface ImagePreviewProps {
  pictures: File[];
  onRemovePicture: (index: number) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  pictures,
  onRemovePicture,
}) => {
  return (
    <Box
      sx={{
        marginTop: "16px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 2,
        justifyContent: "center",
        "@media (max-width: 400px)": {
          gridTemplateColumns: "1fr",
        },
      }}
    >
      {pictures.map((picture, index) => (
        <ImageListItem key={picture.name} style={{ position: "relative" }}>
          <img
            src={URL.createObjectURL(picture)}
            alt={`Preview ${index + 1}`}
            style={{
              width: "100%",
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              margin: "4px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
          />
          <IconButton
            onClick={() => onRemovePicture(index)}
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              padding: "2px",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <DeleteIcon fontSize="small" style={{ color: "white" }} />
          </IconButton>
        </ImageListItem>
      ))}
    </Box>
  );
};

export default ImagePreview;
