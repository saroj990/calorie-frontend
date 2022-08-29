import { useLocation, Navigate } from "react-router-dom";
import { authHelper } from "../util/auth";

const AuthorizedRoute = ({ children }) => {
  const location = useLocation();

  if (!authHelper.isLoggedIn()) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }
  return children;
};

export { AuthorizedRoute };
