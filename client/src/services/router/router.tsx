import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import VehicleFormPage from "../../pages/VehicleFormPage";
import VehicleViewPage from "../../pages/VehicleViewPage";
import PrivateRoute from "./privateRoute";
import Navbar from "../../components/Navbar";

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
              <PrivateRoute>
                <Navbar title="Submit Vehicles" />
                <VehicleFormPage />
              </PrivateRoute>
            </>
          }
        />
        <Route
          path="/VehicleView"
          element={
            <>
              <PrivateRoute>
                <Navbar title="Vehicle Submissions" />
                <VehicleViewPage />
              </PrivateRoute>
            </>
          }
        />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Router;
