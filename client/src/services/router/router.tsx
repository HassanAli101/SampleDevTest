import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import VehicleFormPage from "../../pages/VehicleFormPage";
import VehicleViewPage from "../../pages/VehicleViewPage";

const Router = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route
          path="/Login"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/VehicleForm"
          element={
            <>
              <VehicleFormPage />
            </>
          }
        />
        <Route
          path="/VehicleView"
          element={
            <>
              <VehicleViewPage />
            </>
          }
        />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Router;
