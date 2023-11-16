import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "~/pages/admin/Dashboard";

const AdminRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/dasboard" element={<Dashboard />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default AdminRoute;
