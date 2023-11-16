import { Routes, Route } from "react-router-dom";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/adm/*" element={<AdminRoute />} />
      <Route path="/*" element={<UserRoute />} />
    </Routes>
  );
}
