import { Routes, Route, Outlet } from "react-router-dom";

import Homepage from "~/pages/user/home";
import Newspage from "~/pages/user/news";

export default function UserRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<Newspage />} />
      </Routes>
      <Outlet />
    </>
  );
}
