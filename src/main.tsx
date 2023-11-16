import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/global.css";
import NewsPage from "~/routes/user/news";
import HomePage from "~/routes/user/home";
import Dashboard from "~/routes/admin/dashboard";

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
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
