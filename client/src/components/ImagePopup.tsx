import React from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ImagePopupProps } from "../utils/types";
import {
  VehicleViewImagePopupModal,
  VehicleViewImagePopupBox,
  VehicleViewImageGridBox,
  VehicleViewImageGridBox2,
  VehicleViewImageGridCloseButton,
} from "../utils/styleConstants";

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
      sx={VehicleViewImagePopupModal}
    >
      <Box sx={VehicleViewImagePopupBox}>
        {/* Close Button */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={VehicleViewImageGridCloseButton}
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
        <Box sx={VehicleViewImageGridBox}>
          {pictureUrls.map((url, index) => (
            <Box
              key={index}
              component="img"
              src={url}
              alt={`Image ${index + 1}`}
              sx={VehicleViewImageGridBox2(isMobile)}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ImagePopup;
