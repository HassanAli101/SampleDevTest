import React from "react";
import { CardContent, Typography } from "@mui/material";
import { DetailsSectionProps } from "../utils/types";

const DetailsSection: React.FC<DetailsSectionProps> = ({
  carModel,
  price,
  phoneNumber,
  email,
  isMobile,
}) => {
  return (
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
};

export default DetailsSection;
