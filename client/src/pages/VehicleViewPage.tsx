import React from "react";
import { useVehicleView } from "../hooks/useVehicleView";
import VehicleViewCard from "../components/VehicleViewCard";
import { Container, Typography, Stack } from "@mui/material";
import VehicleCardSkeleton from "../components/VehicleCardSkeleton";

const VehicleViewPage: React.FC = () => {
  const { vehicles, loading, error } = useVehicleView();
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
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      {vehicles.length === 0 ? (
        <Typography>No submissions available.</Typography>
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
    </Container>
  );
};

export default VehicleViewPage;
