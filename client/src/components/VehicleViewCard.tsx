import React, { useState } from "react";
import { Card, useMediaQuery } from "@mui/material";
import ImagePopup from "./ImagePopup";
import ImagesSection from "./ImagesSection";
import DetailsSection from "./DetailsSection";
import { VehicleViewCardProps } from "../utils/types";

const VehicleViewCard: React.FC<VehicleViewCardProps> = ({
  carModel,
  price,
  phoneNumber,
  email,
  pictureUrls,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          padding: 2,
          marginBottom: 2,
          boxShadow: 3,
          position: "relative",
        }}
      >
        <ImagesSection
          pictureUrls={pictureUrls}
          carModel={carModel}
          isMobile={isMobile}
          onPopupOpen={handlePopupOpen}
        />
        <DetailsSection
          carModel={carModel}
          price={price}
          phoneNumber={phoneNumber}
          email={email}
          isMobile={isMobile}
        />
      </Card>

      {/* Image Popup */}
      <ImagePopup
        open={popupOpen}
        onClose={handlePopupClose}
        pictureUrls={pictureUrls}
      />
    </>
  );
};

export default VehicleViewCard;
