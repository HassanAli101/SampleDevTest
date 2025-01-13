import React, { useState } from "react";
import { useVehicleView } from "../hooks/useVehicleView";
import VehicleViewCard from "../components/VehicleViewCard";
import { Container, Typography, Stack, Snackbar, Alert } from "@mui/material";
import VehicleCardSkeleton from "../components/VehicleCardSkeleton";

const VehicleViewPage: React.FC = () => {
  const { vehicles, loading, error } = useVehicleView();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(!!error);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  if (loading) {
    return (
      <Container>
        <Stack sx={{ marginTop: "10vh" }}>
          <VehicleCardSkeleton variation={3} />
          <VehicleCardSkeleton variation={2} />
          <VehicleCardSkeleton variation={1} />
        </Stack>
      </Container>
    );
  }

  return (
    <Container>
      {vehicles.length === 0 ? (
        <Typography sx={{ marginTop: "10vh" }}>
          No submissions available.
        </Typography>
      ) : (
        <Stack sx={{ marginTop: "10vh" }}>
          {vehicles.map((vehicle) => (
            <VehicleViewCard
              key={vehicle._id}
              carModel={vehicle.carModel}
              price={vehicle.price}
              phoneNumber={vehicle.phoneNumber}
              email={vehicle.email}
              pictureUrls={vehicle.pictureUrls}
            />
          ))}
        </Stack>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error || "An error occurred while fetching data."}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default VehicleViewPage;
