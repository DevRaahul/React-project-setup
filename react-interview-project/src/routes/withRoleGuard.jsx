import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const withRoleGuard = (allowedRoles) => (WrappedComponent) => {
  const RoleGuard = (props) => {
    const [globalData, updateGlobalData] = useGlobalContext();
    const useRole = globalData?.role;
    const hasAllowedRole = allowedRoles?.includes(useRole);

    if (!hasAllowedRole) {
      return <Navigate to="/unauthorized" replace />;
    }

    return <WrappedComponent {...props} />;
  };
  return RoleGuard;
};

export default withRoleGuard;
