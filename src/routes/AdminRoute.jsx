import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../components/ui/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader/>
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;