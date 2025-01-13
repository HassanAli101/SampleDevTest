import React from "react";
import { ImageListItem, IconButton, Box, useMediaQuery } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { ImagePreviewProps } from "../utils/types";
import {
  ImageDeleteIconStyle,
  ImagePreviewStyle,
  ImagePreviewBoxStyle,
} from "../utils/styleConstants";

const ImagePreview: React.FC<ImagePreviewProps> = ({
  pictures,
  onRemovePicture,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 400px)");
  return (
    <Box sx={ImagePreviewBoxStyle(isSmallScreen)}>
      {pictures.map((picture, index) => (
        <ImageListItem key={picture.name} style={{ position: "relative" }}>
          <img
            src={URL.createObjectURL(picture)}
            alt={`Preview ${index + 1}`}
            style={ImagePreviewStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
          />
          <IconButton
            onClick={() => onRemovePicture(index)}
            style={ImageDeleteIconStyle}
          >
            <DeleteIcon fontSize="small" style={{ color: "white" }} />
          </IconButton>
        </ImageListItem>
      ))}
    </Box>
  );
};

export default ImagePreview;
