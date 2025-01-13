import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ImagePopup from "./ImagePopup"; // Import the popup component

interface VehicleViewCardProps {
  carModel: string;
  price: number;
  phoneNumber: number;
  email: string;
  pictureUrls: string[];
}

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

  const ImagesSection = (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: pictureUrls.length === 0 ? "#f5f5f5" : "transparent",
        borderRadius: "8px",
        marginBottom: isMobile ? 2 : 0, // Add spacing on mobile
      }}
      onClick={pictureUrls.length > 0 ? handlePopupOpen : undefined}
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
              key={index}
              component="img"
              src={url}
              alt={`${carModel} - ${index + 1}`}
              sx={{
                width: 100,
                height: 100,
                objectFit: "cover",
                borderRadius: "8px",
                position: "absolute",
                top: `${index * 10}px`,
                left: `${index * 10}px`,
                transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                zIndex: 4 - index,
                transition: "all 0.3s ease",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            />
          ))}

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              zIndex: 10,
              opacity: 0,
              transition: "opacity 0.3s ease",
              "&:hover": {
                opacity: 1,
                cursor: "pointer",
              },
            }}
          >
            View images
          </Box>
        </>
      )}
    </Box>
  );

  const DetailsSection = (
    <CardContent sx={{ flex: 1, marginLeft: isMobile ? 0 : 2 }}>
      <Typography variant="h6" component="div">
        {carModel}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        <strong>Price:</strong> ${price}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        <strong>Phone:</strong> {phoneNumber}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        <strong>Submitted by:</strong> {email}
      </Typography>
    </CardContent>
  );

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
        {isMobile ? (
          <>
            {ImagesSection}
            {DetailsSection}
          </>
        ) : (
          <>
            {ImagesSection}
            {DetailsSection}
          </>
        )}
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
