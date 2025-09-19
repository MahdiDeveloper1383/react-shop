// ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

import { JSX, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface ProtectedRouteProps {
    children:JSX.Element
    role?: "admin" | "user"; 
}

const ProtectedRoute = ({ children,role }: ProtectedRouteProps) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/*" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
