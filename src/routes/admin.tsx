import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "~/pages/admin/dashboard";

export default function AdminRoute() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Outlet />
    </>
  );
}
