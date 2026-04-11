import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.client.user);
  const location = useLocation();
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  
  if (!user?.token && !token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}