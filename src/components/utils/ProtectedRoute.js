import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("token");
        return <Navigate to="/login" />;
      }
    } catch (error) {
      console.error("Failed to decode token", error);
      return <Navigate to="/login" />;
    }
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

// Add propTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
