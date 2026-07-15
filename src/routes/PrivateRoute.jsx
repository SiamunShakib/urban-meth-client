import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext/AuthContext";
import useAuth from "../hooks/useAuth";
import Loader from "../components/ui/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={location.pathname}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;