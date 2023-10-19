import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/signin" state={{ from: rest.location }} />;
};

export default ProtectedRoute;
