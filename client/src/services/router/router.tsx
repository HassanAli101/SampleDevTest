import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";

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
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Router;
