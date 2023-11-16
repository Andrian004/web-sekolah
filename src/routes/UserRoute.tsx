import { Routes, Route, Outlet } from "react-router-dom";

import Homepage from "../pages/user/Homepage";
import Newspage from "../pages/user/Newspage";

const UserRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<Newspage />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default UserRoute;
