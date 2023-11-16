import { Routes, Route } from "react-router-dom";
import AdminRoute from "~/routes/admin";
import UserRoute from "~/routes/user";

export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoute />} />
      <Route path="/*" element={<UserRoute />} />
    </Routes>
  );
}
