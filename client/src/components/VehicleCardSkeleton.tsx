import React from "react";
import {
  Box,
  Skeleton,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const VehicleCardSkeleton: React.FC<{ variation: number }> = ({
  variation,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 2,
        marginBottom: 2,
        boxShadow: 3,
      }}
    >
      {/* Left Side - Images Skeleton */}
      <Box
        sx={{ width: 150, height: 150, position: "relative", marginRight: 2 }}
      >
        {variation === 1 || variation === 3 ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ borderRadius: 2 }}
          />
        ) : null}

        {variation === 3 && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Skeleton
              variant="rectangular"
              width="60%"
              height="60%"
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                borderRadius: 1,
              }}
            />
            <Skeleton
              variant="rectangular"
              width="60%"
              height="60%"
              sx={{
                position: "absolute",
                top: "30px",
                left: "30px",
                borderRadius: 1,
              }}
            />
            <Skeleton
              variant="rectangular"
              width="60%"
              height="60%"
              sx={{
                position: "absolute",
                top: "50px",
                left: "50px",
                borderRadius: 1,
              }}
            />
          </Box>
        )}
      </Box>

      {/* Right Side - Vehicle Details Skeleton */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">
          <Skeleton width="80%" />
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Skeleton width="40%" />
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Skeleton width="60%" />
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Skeleton width="50%" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VehicleCardSkeleton;
