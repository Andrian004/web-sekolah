import { Routes, Route, Outlet } from "react-router-dom";

import HomePage from "~/pages/user/home";
import NewsPage from "~/pages/user/news";

export default function UserRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Outlet />
    </>
  );
}
