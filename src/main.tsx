import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/global.css";
import NewsPage from "~/routes/user/news";
import HomePage from "~/routes/user/home";
import Dashboard from "~/routes/admin/dashboard";
import PlanPage from "~/routes/user/plan";
import StaffPage from "~/routes/user/staff";
import AboutPage from "~/routes/user/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/plan",
    element: <PlanPage />,
  },
  {
    path: "/staff",
    element: <StaffPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
