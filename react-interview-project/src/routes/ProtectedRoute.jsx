import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const ProtectedRoute = () => {
  debugger;
  const [globalData, updateGlobalData] = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!globalData?.loggedIn) {
      navigate("/login");
    }
  }, []);

  return <Outlet />;
};

export default ProtectedRoute;
