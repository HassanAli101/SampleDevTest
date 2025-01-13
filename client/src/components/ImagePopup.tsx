import React from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ImagePopupProps {
  open: boolean;
  onClose: () => void;
  pictureUrls: string[];
}

const ImagePopup: React.FC<ImagePopupProps> = ({
  open,
  onClose,
  pictureUrls,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="popup-title"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative", 
          width: "50%",
          height: "50%",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 24,
          padding: 3,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Close Button */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "grey.600",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography
          id="popup-title"
          variant="h6"
          component="h2"
          sx={{ marginBottom: 2 }}
        >
          All Images
        </Typography>

        {/* Image Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pictureUrls.map((url, index) => (
            <Box
              key={index}
              component="img"
              src={url}
              alt={`Image ${index + 1}`}
              sx={{
                width: isMobile ? 150 : 300,
                height: isMobile ? 150 : 300,
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ImagePopup;
