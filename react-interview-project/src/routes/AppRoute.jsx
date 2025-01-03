import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import AdminPage from "../pages/AdminPage";
import ProtectedRoute from "./ProtectedRoute";
import withRoleGuard from "./withRoleGuard";
import UserPage from "../pages/UserPage";
import UnauthorizedView from "../pages/UnauthorizedView";
import ReduxCounter from "../pages/ReduxCounter";

const AdminDashboard = withRoleGuard(["admin"])(AdminPage);
const UserPageView = withRoleGuard(["user"])(UserPage);

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/userView" element={<UserPageView />} />
            <Route path="/unauthorized" element={<UnauthorizedView />} />
            <Route path="/reduxCounter" element={<ReduxCounter />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
