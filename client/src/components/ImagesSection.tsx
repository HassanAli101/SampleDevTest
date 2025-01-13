import React from "react";
import { Box, Typography } from "@mui/material";
import { ImagesSectionProps } from "../utils/types";
import {
  VehicleViewImagesSectionBox,
  VehicleViewImagesSectionBox2,
  VehicleViewImagesSectionBox3,
} from "../utils/styleConstants";

const ImagesSection: React.FC<ImagesSectionProps> = ({
  pictureUrls,
  carModel,
  isMobile,
  onPopupOpen,
}) => {
  const bgcolor = pictureUrls.length === 0 ? "#f5f5f5" : "transparent";
  const mgBottom = isMobile ? 2 : 0;
  return (
    <Box
      sx={VehicleViewImagesSectionBox(bgcolor, mgBottom)}
      onClick={pictureUrls.length > 0 ? onPopupOpen : undefined}
    >
      {pictureUrls.length === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#757575",
          }}
        >
          This submission has no images
        </Typography>
      ) : (
        <>
          {pictureUrls.slice(0, 4).map((url, index) => (
            <Box
              key={url}
              component="img"
              src={url}
              alt={`${carModel} - ${index + 1}`}
              sx={VehicleViewImagesSectionBox3(index)}
            />
          ))}

          <Box sx={VehicleViewImagesSectionBox2}>View images</Box>
        </>
      )}
    </Box>
  );
};

export default ImagesSection;
